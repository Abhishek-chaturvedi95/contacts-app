const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const keys = require("../config/keys")
const mongoose = require("mongoose")
const User = mongoose.model('users')
const { google } = require('googleapis')


// encrypt and store in the seeion
passport.serializeUser((user, done) => {
    done(null, user.id)
})
// decrypt the id and retrive from session
passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
})


passport.use(new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        console.log("access token : ", accessToken)
        // console.log("refresh token : " , refreshToken)
        // console.log("profile : " , profile)
        // console.log("done : " , done)
        //.....................................................................................................
        const arr = []
        const authObj = new google.auth.OAuth2({
            access_type: 'offline',
            clientId: keys.googleClientId,
            clientSecret: keys.googleClientSecret,
            redirectUri: `http://localhost:5000/`,
            scope: [`https://www.googleapis.com/auth/contacts`]
        });
        authObj.setCredentials({
            access_token: accessToken,
            refresh_token: refreshToken,
        });
        const service = google.people({
            version: "v1",
            auth: authObj
        });
        service.people.connections.list({
            resourceName: "people/me",
            pageSize: 1000,
            personFields: "names,emailAddresses,phoneNumbers,photos",
            requestSyncToken: true,
            // pageToken: pageToken
        }, async (err, res) => {
            if (err) return console.error("The API returned an error: " + err);
            for(let i = 0 ; i < res.data.connections.length ; i++){
                arr.push((res.data.connections[i]))
            }
            console.log("Contacts - array : " + arr)
            return res.data.connections
        })
        //.......................................................................................................

        setTimeout(() => {
            User.findOne({ googleId: profile.id })
                .then((existingUser) => {
                    if (existingUser) {
                        done(null, existingUser)
                    } else {

                        new User({
                            googleId: profile.id,
                            email: profile.emails[0].value,
                            firstName: profile.name.givenName,
                            lastName: profile.name.familyName,
                            accessToken: accessToken,
                            refreshToken: refreshToken,
                            photo: profile.photos[0].value,
                            contacts: arr,
                        }).save()
                            .then((user) => {
                                done(null, user)
                            })
                    }
                })

        }, 5000);


    }
))

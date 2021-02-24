const express = require("express")
const app = express()
const mongoose = require('mongoose')
const keys = require('./config/keys')
const { google } = require('googleapis')
//const cors = require('cors')

// cookie-session and passport ->
const cookieSession = require('cookie-session')
const passport = require("passport")

// port defining
const PORT = process.env.PORT || 5000

require('./models/User')
require('./services/passport')

// connect to db
mongoose.connect(keys.mongoURI , () => {
    console.log("Connected to Database")
})
// USING COOKIES
app.use(
    cookieSession({
        maxAge : 30*24*60*60*1000,
        keys:[keys.cookieKey]
    })
)
// LINK PASSPORT WITH COOKIE AND SESSION START
app.use(passport.initialize())
app.use(passport.session())

// Authentication Routes
require('./routes/authRoute')(app)

app.listen(PORT , () => {
    console.log("server running on " + PORT)
})

//require('./routes/apiRoute')(app)
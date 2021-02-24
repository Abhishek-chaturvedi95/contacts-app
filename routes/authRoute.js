const passport = require('passport')
const express = require('express')
const User = require('../models/User');

module.exports = (app) => {
    app.get('/auth/google' , passport.authenticate('google' , {
        scope : ["profile" , "email" , "https://www.googleapis.com/auth/contacts"],
        accessType: 'offline',
        prompt: 'consent'
    }))
    
    app.get("/auth/google/callback" , passport.authenticate('google' , {failureRedirect : '/'}) , 
    (req , res) => {
        res.redirect(`http://localhost:3000/contacts/${req.user.id}`)
    }) 

    // if logged in req.user exists
    app.get('/api/current_user' , (req , res) => {
        res.send(req.user)
    })

    app.get('/contacts/:id',async (req,res)=>{
        try{
            const id = req.params.id;
            let contacts;
            const user = await User.findById(id)
            contacts = user.contacts;
            if (contacts.length > 0) {
                res.status(200).json(contacts)
            } else {
                res.status(201).json({
                    message: " This account has no contacts"
                })
            }
        } catch(e){
            res.status(400).json({message: "in the catch block"})
        }
    })

    // route for logout
    app.get('/api/logout' , (req , res) => {
        req.logout();
        res.redirect('/')
    })
}

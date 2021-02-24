const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    googleId : {
        type : String,
        required : true
    },
    email:{
        type:String,
        required : true,
    },
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String
    },
    photo:{
        type:String,
    },
    accessToken: {
        type: String,
    },
    refreshToken: {
        type: String,
    },
    syncToken: {
        type: String,
    },
    createdAt : {
        type : String,
        default : Date.now
    },
    contacts : {
        type : Array,
        default : []
    }
})

module.exports = mongoose.model("users" , userSchema)
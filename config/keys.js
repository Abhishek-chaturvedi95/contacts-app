// client id = 177277568773-m3gq929m1mbcjkkvl343gtp69dc9bjts.apps.googleusercontent.com
// client secret = 3fAKBq5IyenNJJkMvEAXn3Co

if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod')
}else{
    module.exports = require('./dev')
}

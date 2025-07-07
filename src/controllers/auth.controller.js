const passport = require("passport")

function authenticateGoogle(){
    passport.authenticate('google',{
        scope: ['email','profile']
    });
}
function callbackGoogle(){
    passport.authenticate('google',{
        successRedirect:'/',
        failureRedirect:'/login/failed',
    })
}
//TODO:
// function authenticateFacebook(){
//         passport.authenticate('facebook',{
//             scope:[''],
//         })
// }
// function callbackFacebook(){

// }

module.exports={authenticateGoogle,
    callbackGoogle,
}
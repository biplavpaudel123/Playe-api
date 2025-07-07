const passport = require("passport")

const authenticateGoogle= passport.authenticate('google',{
        scope: ['email','profile']
    });

const callbackGoogle= passport.authenticate('google',{
        successRedirect:'/',
        failureRedirect:'/login/failed',
        session:false,
    });

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
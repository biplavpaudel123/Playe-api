const passport = require("passport")

const authenticateGoogle= passport.authenticate('google',{
        scope: ['email','profile']
    });

const callbackGoogle= passport.authenticate('google',{
        successRedirect:'/v1',
        failureRedirect:'/login/failed',
        session:false,
    });

//TODO:
const authenticateFacebook=
        passport.authenticate('facebook',{
            scope:['email','public_profile'],
        })

const callbackFacebook=passport.authenticate('google',{
        successRedirect:'/v1',
        failureRedirect:'/login/failed',
        session:false,
    });

module.exports={authenticateGoogle,
    callbackGoogle,
    authenticateFacebook,
    authenticateGoogle,callbackFacebook
}
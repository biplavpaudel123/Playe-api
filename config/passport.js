const passport= require('passport');
const facebookStrategy = require('passport-facebook').Strategy;
const googleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_AUTH_OPTIONS={
    callbackURL:'/v1/auth/google/callback',
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
};
//TODO:
const FACEBOOK_AUTH_OPTIONS={
    callbackURL:'/auth/google/callback',
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    profileFields: ['id', 'displayName', 'emails']
};

function verifyCallback(accessToken,refreshToken,profile,done){
    console.log(profile);
    done(null,profile);
}


passport.use(new googleStrategy(GOOGLE_AUTH_OPTIONS, verifyCallback));
// TODO: 
passport.use(new facebookStrategy(FACEBOOK_AUTH_OPTIONS, verifyCallback));

const passport= require('passport');
const verifyCallback= require('../services/auth/verifyCallback');
const facebookStrategy = require('passport-facebook').Strategy;
const googleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_AUTH_OPTIONS={
    callbackURL:'/v1/auth/google/callback',
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
};

const FACEBOOK_AUTH_OPTIONS={
    callbackURL:'/v1/auth/facebook/callback',
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    profileFields: ['id', 'displayName', 'emails', 'name', 'gender', 'photos'],
};


passport.use(new googleStrategy(GOOGLE_AUTH_OPTIONS, verifyCallback));
passport.use(new facebookStrategy(FACEBOOK_AUTH_OPTIONS, verifyCallback));

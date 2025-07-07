const express= require('express');

const {authenticateGoogle,callbackGoogle}= require('../controllers/auth.controller')


const authRoute= express.Router();

authRoute.get('/google', authenticateGoogle);
authRoute.get('/google/callback', callbackGoogle);
// TODO:
// authRoute.get('/facebook', authenticateFacebook);
// authRoute.get('/facebook/callback',callbackFacebook);

module.exports=authRoute;
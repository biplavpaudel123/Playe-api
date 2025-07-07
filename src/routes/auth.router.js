const express= require('express');

const {authenticateGoogle,callbackGoogle,authenticateFacebook,callbackFacebook}= require('../middlewares/passsport.middleware')


const authRoute= express.Router();

authRoute.get('/google', authenticateGoogle);
authRoute.get('/google/callback', callbackGoogle);
authRoute.get('/facebook', authenticateFacebook);
authRoute.get('/facebook/callback',callbackFacebook);

module.exports=authRoute;
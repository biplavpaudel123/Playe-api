const express= require('express');

const {authenticateGoogle,callbackGoogle,authenticateFacebook,callbackFacebook}= require('../middlewares/passsport.middleware');
const { httpsTokenSender } = require('../handlers/auth.handler');
const {tokenCheckerForAuthRoutes}= require('../middlewares/auth.middleware');


const authRoute= express.Router();

authRoute.get('/google', tokenCheckerForAuthRoutes,authenticateGoogle);
authRoute.get('/google/callback', tokenCheckerForAuthRoutes,callbackGoogle,httpsTokenSender);
authRoute.get('/facebook', tokenCheckerForAuthRoutes,authenticateFacebook);
authRoute.get('/facebook/callback',tokenCheckerForAuthRoutes,callbackFacebook,httpsTokenSender);

module.exports=authRoute;
const express= require('express');

const {authenticateGoogle,callbackGoogle,authenticateFacebook,callbackFacebook}= require('../middlewares/passsport.middleware');
const { httpsSocialTokenSender } = require('../handlers/auth.handler');
const {tokenCheckerForAuthRoutes}= require('../middlewares/auth.middleware');
const { httpsLocalSignup,httpsLocalLogin } = require('../controllers/auth.controller');


const authRoute= express.Router();

authRoute.get('/google', tokenCheckerForAuthRoutes,authenticateGoogle);
authRoute.get('/google/callback', tokenCheckerForAuthRoutes,callbackGoogle,httpsSocialTokenSender);
authRoute.get('/facebook', tokenCheckerForAuthRoutes,authenticateFacebook);
authRoute.get('/facebook/callback',tokenCheckerForAuthRoutes,callbackFacebook,httpsSocialTokenSender);

authRoute.post('/local/signup',tokenCheckerForAuthRoutes,httpsLocalSignup);
authRoute.post('/local/login',tokenCheckerForAuthRoutes,httpsLocalLogin)

module.exports=authRoute;
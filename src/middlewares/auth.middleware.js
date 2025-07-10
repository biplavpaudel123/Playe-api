const { jwtVerify } = require("../utils/jwt.util");

function tokenCheckerForAuthRoutes(req, res, next) { //for auth routes only ,as we dont want to redirect other routes to home on valid token
    const token=req.cookies.token;
    if (!token) {
        next();   // go forward to login,signup
    }
    else{
        try {
            jwtVerify(token);
            res.redirect('/v1/');
        } catch (e) {
            next();  //go forward to login,signup
        }
    }
}



module.exports = { tokenCheckerForAuthRoutes }
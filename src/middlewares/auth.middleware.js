const { jwtVerify } = require("../utils/jwt.util");

function tokenCheckerForAuthRoutes(req, res, next) {
    const token=req.cookies.token;
    if (!token) {
        next();
    }
    else{
        try {
            jwtVerify(token);
            res.redirect('/v1/');
        } catch (e) {
            next();
        }
    }
}



module.exports = { tokenCheckerForAuthRoutes }
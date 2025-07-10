const { jwtGenerate } = require("../utils/jwt.util");

function httpsSocialTokenSender(req, res){
    const token = jwtGenerate(req.user);
    res.cookie('token',token,{
        httpOnly:true,
        secure:true,
        sameSite:'Strict',
        maxAge: 24*60*60*1000
    });
    res.redirect('/v1');
}
module.exports={
    httpsSocialTokenSender,
}
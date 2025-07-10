const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;
function jwtGenerate(user) {
    return jwt.sign({ id: user.userID ,provider:user.provider}, JWT_SECRET, { expiresIn: '7d' })
}

function jwtVerify(token) {
    try {
        return jwt.verify(token, JWT_SECRET)
    } catch (e) {
        throw new Error('Error verifying the token,please login again!!');
    }
}

module.exports = {
    jwtGenerate,
    jwtVerify,
}

const { formatSocialUser } = require("../../utils/userUtils/formatUser.util");
const {saveUser, findUser}= require('../user.service');

async function socialCallback(accessToken,refreshToken,profile,done){
    // console.log(profile);
    const formattedUser= formatSocialUser(profile);
    if (!findUser(formattedUser)){
    await saveUser(formattedUser);
    }
    done(null,formattedUser);
}
module.exports=socialCallback

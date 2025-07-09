const { formatSocialUser } = require("../../utils/formatSocialUser.util");
const {saveUser}= require('../user.service');

async function socialCallback(accessToken,refreshToken,profile,done){
    // console.log(profile);
    const formattedUser= formatSocialUser(profile);
    await saveUser(formattedUser);
    done(null,formattedUser);
}
module.exports=socialCallback

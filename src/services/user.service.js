
const userDatabase= require('../models/user.model');

async function checkUsedEmail(user){
    const matchedUser=await userDatabase.findOne({
        email: user.email,
    });
    return matchedUser;
}


async function saveUser(user){
    await userDatabase.updateOne({
        userID: user.userID,
        provider: user.provider,
    },
    user,
    {
        upsert:true
    });
};

async function findUser(user){
    const existingUser=await userDatabase.findOne({userID: user.userID, provider:user.provider});
    return existingUser;
}


module.exports={
saveUser,
checkUsedEmail,
findUser,
}
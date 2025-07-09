
const userDatabase= require('../models/user.model');

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

module.exports={
saveUser,
}
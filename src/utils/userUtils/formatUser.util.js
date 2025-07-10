const userDatabase=require('../../models/user.model');

const FIRST_LOCAL_ID= 100000000000000;

function formatSocialUser(profile){
    const user={
        name: profile.displayName,
        provider: profile.provider,
        email: profile._json.email,
        userID: profile.id,
    };
    return user;
}
async function formatLocalUser(user){
    user.provider='local';
    user.userID= (await findLatestLocalId())+1;
    return user;
}

async function findLatestLocalId(){
    const latestID= await userDatabase.findOne({provider: 'local'},'userID').sort('-userID');
    if (!latestID){
        return FIRST_LOCAL_ID-1;
    }
        return latestID;
}


module.exports={
    formatSocialUser,
    formatLocalUser,
}

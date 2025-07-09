const { saveUser, checkUsedEmail } = require("../services/user.service");

async function httpsLocalSignup (req,res){
    const  user= req.body;
    if (!user.name || !user.email || !user.password ){
        return  res.status(400).send('Missing required fileds!!');
    }
    const matchedUser=await checkUsedEmail(user);
    if (matchedUser){
        const provider= matchedUser.provider;
        return res.status(400).send(`Email found, login using ${provider}`);
    }
    
    await saveUser(user); //TODO:Encrypt Passwords
    return res.send('Successful signup,You can now Login!!');
}

async function httpsLocalLogin(req,res){
    const user= req.body;
    if (!user.email || !user.password){
        return res.status(400).send('Missing Required Fields');
    }
    const matchedUser= await checkUsedEmail(user);
    if(matchedUser){
        const provider=matchedUser.provider;
        if (provider === 'google' || provider === 'facebook'){
            return res.status(400).send(`Login using ${provider}`);
        }
        else{
            //TODO: check for encrypted password
        }
    }
}


module.exports={
    httpsLocalSignup,
    httpsLocalLogin
}

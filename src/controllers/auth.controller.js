const { saveUser, checkUsedEmail } = require("../services/user.service");
const { formatLocalUser } = require("../utils/userUtils/formatUser.util");
const {jwtGenerate}=require('../utils/jwt.util')
 
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
    await formatLocalUser(user);
    await saveUser(user);
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
            const isCorrectPassword = await matchedUser.comparePassword(user.password);
            if (isCorrectPassword){
                const token = jwtGenerate(matchedUser);
                res.cookie('token',token,{
                httpOnly:true,
                secure:true,
                sameSite:'Strict',
                maxAge: 24*60*60*1000,
            });
            res.redirect('/v1');
            }
            else{
                res.status(404).send("Invalid password");
            }
        }
    }else{
        res.status(404).send("Invalid email");
    }
}


module.exports={
    httpsLocalSignup,
    httpsLocalLogin
}

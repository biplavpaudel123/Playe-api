const express= require('express');

const authRoute= require('../routes/auth.router');

const apiV1= express.Router();

apiV1.use('/auth',authRoute);
apiV1.get('/',(req,res)=>{
    res.send('Welcome to playe api V1');
});

module.exports=apiV1;
const mongoose=require('mongoose');

const MONGO_URI= process.env.MONGO_URI;
mongoose.connection.once('open',()=>{
    console.log('MongoDB connection ready');
});

mongoose.connection.on('error',(err)=>{
    console.error(err);
})

async function connectMongoDB(){
    await mongoose.connect(MONGO_URI);
};

module.exports= connectMongoDB;
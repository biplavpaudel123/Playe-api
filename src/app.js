const express= require('express');
const cors= require('cors');
const morgan= require('morgan');
const app = express();
const passport= require('passport');
const helmet =require('helmet');

const apiV1= require('./apiVersionRoutes/apiV1');

app.use(cors({
    origin: 'https://localhost:3000'
}));
app.use(helmet());
app.use(morgan('combined'))
app.use(express.json());
app.use(passport.initialize());

app.use('/v1',apiV1);


module.exports=app;
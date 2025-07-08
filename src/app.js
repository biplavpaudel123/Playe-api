const express= require('express');
const cookieParser = require('cookie-parser')
const cors= require('cors');
const morgan= require('morgan');
const passport = require('passport');
require('./config/passport.js');
const helmet =require('helmet');

const app = express();
const apiV1= require('./apiVersionRoutes/apiV1');

app.use(cors({
    origin: 'https://localhost:3000'
}));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(morgan('combined'));
app.use(passport.initialize());

app.use('/v1',apiV1);


module.exports=app;
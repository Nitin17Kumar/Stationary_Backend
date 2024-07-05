const express = require("express");
const app = express();

require("dotenv").config();

Port = process.env.Port || 6000;

app.use(express.json());

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const route = require('./routes/route')
app.use('/api',route);

const database = require('./config/database');
database();

app.listen(Port,(req,res)=>{
  console.log(`Server Started at ${Port}`);
})




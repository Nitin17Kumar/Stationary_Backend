const express = require("express");
const cors = require('cors');
const app = express();

require("dotenv").config();


// Custom CORS options
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend domain
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
};

// Use CORS middleware with custom options
app.use(cors(corsOptions));


Port = process.env.Port || 6000;

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({extended:true,limit:'50mb'}))

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const route = require('./routes/route')
app.use('/api',route);

const database = require('./config/database');
database();

app.listen(Port,(req,res)=>{
  console.log(`Server Started at ${Port}`);
})




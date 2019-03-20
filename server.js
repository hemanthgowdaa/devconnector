const express = require('express');

const mongoose = require('mongoose');

const users = require('./routes/api/users') ;
const profile = require('./routes/api/profile') ;
const posts = require('./routes/api/posts') ;

const app = express();

//db config 
const db = require('./config/keys').mongoURI ;

// connect to mongoose 

mongoose.
connect(db)
.then(()=>console.log("mongo db connected"))
.catch(err => console.log(err));


//use routes
app.use('/api/users',users);
app.use('/api/pofile',profile);
app.use('/api/posts',posts);

app.get('/',(req,res)=>res.send("hello"));

const port = process.env.Port || 5000 ;

app.listen (port,()=>console.log(`server is running on ${port}`) );
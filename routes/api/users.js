const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.get('/test',(req,res)=>res.json({ msg :"message from user"}));

router.post('/register',(req,res)=>{
User.findOne({email:req.body.email})
.then(user =>{
if(user){
  return res.status(400).json({email:'email alredyy exist'})
}else{
  const newUser = new User ({
  
    name : req.body.name,
    email : req.body.name,
    avatar,
    password :req.body.password
  });
}

})

});

module.exports = router ;
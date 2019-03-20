const express = require('express');
const router = express.Router();

router.get('/test',(req,res)=>res.json({msg:"message from posts"}));

module.exports = router ;
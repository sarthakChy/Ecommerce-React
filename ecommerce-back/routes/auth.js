const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require('crypto-js');
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async(req, res) => {

  try {
    
    const newUser = await User.create({
          username: req.body.username,
          email: req.body.email,
          password: CryptoJS.AES.encrypt(req.body.password.toString(), process.env.PASS_SEC).toString(),
          
        });

    res.status(201).json(newUser);

  } catch (err) {
        let errMsg;
        if (err.code == 11000) {
          errMsg = Object.keys(err.keyValue)[0] + " already exists.";
        } else {
          errMsg = Object.keys(err.errors)[0] + " is Required.";
        }
        res.status(400).json({ statusText: "Bad Request", message: errMsg })
  }
});

//LOGIN
router.post('/login', async(req,res)=>{

  try {
    const user = await User.findOne({username : req.body.username});

    const hashedPass = CryptoJS.AES.decrypt(user.password,process.env.PASS_SEC);
    const originalPass = hashedPass.toString(CryptoJS.enc.Utf8)
    
    if(user){

      if(originalPass !== req.body.password){
        res.status(401).json({ statusText: "Bad Request", message: 'Wrong Credentials' });
      }else{
        const accessToken = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.jwt, {expiresIn: '3d'})
        const {password, ...others} = user._doc;
        res.status(200).json({...others,accessToken})
      }

    }

  } catch (error) {
    res.status(400).json({ statusText: "Bad Request", message: 'User does not Exist' })
  }
  

})

module.exports = router;

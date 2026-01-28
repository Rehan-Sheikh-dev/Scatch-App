import express from 'express';
import userModel from '../models/user.model.js';
import bcrypt from "bcrypt"
import generateToken from '../utils/generateToken.js';

const app = express.Router();

app.get("/",(req,res)=>{
    res.send("hey boy this is the user page!!");
})

app.post('/register',async(req,res)=>{
    try {
        const {email,fullname,password} = req.body;
        bcrypt.genSalt(12, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
         const user = await userModel.create({
            email,
            fullname,
            password:hash
         })
          const token = generateToken(user);
          res.cookie("token",token);
          res.status(201).send({message:"User registered successfully",data:user});
    });
});
    } catch (error) {
        console.log(error)
    }
})

export default app;


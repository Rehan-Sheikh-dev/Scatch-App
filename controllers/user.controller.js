import bcrypt from "bcrypt"
import generateToken from '../utils/generateToken.js';
import userModel from "../models/user.model.js";

const userController = async(req,res)=>{
    try {
        const {email,fullname,password} = req.body;

        const user = await userModel.findOne({email});
        if(user) return res.status(400).send({message:"User already exists"});
        
        bcrypt.genSalt(12, function(err, salt) {
             if (err) {
        return res.status(500).send("Error generating salt");
      }
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

}

export default userController;
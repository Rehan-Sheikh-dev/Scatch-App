import express from 'express';
import ownerModel from '../models/owner.model.js';

const app = express.Router();

app.get("/",(req,res)=>{
       res.send("hey boy this is the owner page!!");
})

app.post("/create",async(req,res)=>{
     let owners = await ownerModel.find();
     if(owners.length>0){
       return res.status(500).send({message:"You don't have permission to create more than one owner"});
     }
 const {fullname,email,password}= req.body;
     
          const createdOwner = await ownerModel.create({
              fullname,
              email,
              password
          })
          return res.
          status(200).send({message:"Owner created successfully",data:createdOwner
          })
       })

export default app;


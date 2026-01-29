import express from 'express';
import ownerController from '../controllers/owner.controller.js';

const app = express.Router();

app.get("/", (req, res) => {
  res.send("hey boy this is the owner page!!");
})

app.post("/create", ownerController)

app.get('/admin',(req,res)=>{
  
})

export default app;


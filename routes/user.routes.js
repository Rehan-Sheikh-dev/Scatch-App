import express from 'express';
import userController from '../controllers/user.controller.js';
const app = express.Router();

app.get("/",(req,res)=>{
    res.send("hey boy this is the user page!!");
})

app.post('/register',userController)

export default app;


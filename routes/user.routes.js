import express from 'express';
import {userController,loginController,logoutController}  from '../controllers/user.controller.js';
const app = express.Router();

app.get("/",(req,res)=>{
    res.send("hey boy this is the user page!!");
})

app.post('/register',userController);
app.post('/login',loginController);
app.get('/logout',logoutController);

export default app;


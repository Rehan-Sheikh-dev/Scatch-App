import express from 'express';

const app = express.Router();

app.get("/",(req,res)=>{
    res.send("hey boy this is the user page!!");
})

export default app;


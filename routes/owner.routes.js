import express from 'express';

const app = express.Router();

app.get("/",(req,res)=>{
       res.send("hey boy this is the owner page!!");
})

export default app;


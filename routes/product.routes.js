import express from 'express';

const app = express.Router();

app.get("/",(req,res)=>{
        res.send("hey boy this is the product page!!");
})

export default app;


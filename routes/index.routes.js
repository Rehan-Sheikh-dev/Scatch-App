import express from 'express';
import isLoggedIn from '../middleware/IsLoggedin.middleware';

const app = express.Router();

app.get('/', isLoggedIn, (req, res) => {
let error = req.flash("error");
res.render("index", {error})
})

app.get("/shop",isLoggedIn, (req, res) => {
    res.render("shop");
})


export default app;
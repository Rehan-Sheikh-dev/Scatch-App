import express from 'express';
import isLoggedIn from '../middleware/IsLoggedin.middleware';
import productModel from '../models/product.model';

const app = express.Router();

app.get('/', (req, res) => {
let error = req.flash("error");
res.render("index", {error})
})

app.get("/shop",isLoggedIn, async(req, res) => {
    const products = await productModel.find();
    res.render("shop",{products});
})

app.get("/logout", isLoggedIn,(req, res) => {
     res.cookie("token","");
     res.redirect("/users/login");
})

export default app;
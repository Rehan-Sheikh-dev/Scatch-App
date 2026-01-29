import express from 'express';
import upload from '../config/multer.config.js';
import productModel from '../models/product.model.js';

const app = express.Router();

app.post("/create", upload.single("image"), async (req, res) => {
       try {
         const { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

        const product = await productModel.create({
                image: req.file.filename,
                price,
                name,
                discount,
                bgcolor,
                panelcolor,
                textcolor
        });
        req.flash('success', 'Product created successfully');
       
    const products = await productModel.find(); 
    res.render("admin", {
      success: "Product created successfully",
      products      
    });


       } catch (error) {
        res.status(500).send(error.message);
       }
})

export default app;


import express from "express";
import upload from "../config/multer.config.js"; // memoryStorage
import ownerController from "../controllers/owner.controller.js";
import productModel from "../models/product.model.js";

const router = express.Router();

router.get("/admin", async (req, res) => {
  try {
    const products = await productModel.find();

    res.render("createProducts", {
      products,
      success: req.flash("success"),
      error: req.flash("error")
    });

  } catch (err) {
    res.render("createProducts", {
      products: [],
      error: ["Failed to load products"]
    });
  }
});


router.post(
  "/product/create",
  upload.single("image"),
  ownerController
);

export default router;

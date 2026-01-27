import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
    }],
    picture: String,
    gstin: String
});

const owner = mongoose.model('owner', userSchema);
export default owner;
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
    }],
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order',
    }],
    contactNumber: Number,
    picture: String
});

const user = mongoose.model('user', userSchema);
export default user;
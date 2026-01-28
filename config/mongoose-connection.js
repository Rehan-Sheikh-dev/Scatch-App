    import mongoose from 'mongoose';
   
    const debug = require("debug")("development:mongoose")
   const connectDB = async () => {
     try {
   await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`,)
   console.log("MongoDB connected successfully");
    } catch (err) {
        console.log("Error connecting to MongoDB:", err);
    }
   }

    export default connectDB;
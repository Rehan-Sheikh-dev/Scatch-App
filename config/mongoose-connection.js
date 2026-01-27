    import mongoose from 'mongoose';

   const connectDB = async () => {
     try {
   await mongoose.connect(`mongodb://127.0.0.1:27017/scatch`)
   console.log("MongoDB connected successfully");
    } catch (err) {
        console.log("Error connecting to MongoDB:", err);
    }
   }

    export default connectDB;
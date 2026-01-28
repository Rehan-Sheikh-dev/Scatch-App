import express from 'express';
import { fileURLToPath } from "url";
import path from "path";
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB from './config/mongoose-connection.js';
import ownerRouter from './routes/owner.routes.js';
import userRoter from './routes/user.routes.js';
import productRouter from './routes/product.routes.js';

dotenv.config();
connectDB();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use('/owner',ownerRouter)
app.use('/product',productRouter)
app.use('/user',userRoter)
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
res.render('index');
// res.send('Hello World!');
console.log(process.env.NODE_ENV);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);  
});



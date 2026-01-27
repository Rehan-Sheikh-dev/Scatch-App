import express from 'express';
import { fileURLToPath } from "url";
import path from "path";
import cookieParser from 'cookie-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');  
});
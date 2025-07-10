import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine.js';
import initWebRoutes from './routes/web.js';
import dotenv from 'dotenv';
import { connectDB } from './config/connect.js';

dotenv.config();

// prot
const app = express();
const port = process.env.PORT || 8080;

//connect
connectDB();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});

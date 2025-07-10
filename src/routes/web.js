import express from 'express';
import { getHomePage, HomePage } from '../controllers/homeController.js';

const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', getHomePage);
    router.get('/hieutoki', HomePage);
    app.use('/', router);
};

export default initWebRoutes;

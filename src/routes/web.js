import express from 'express';
import { getHomePage, HomePage, getCRUD, postCRUD, displayGetCRUD, getEidtCRUD, putCRUD, deleteCRUD } from '../controllers/homeController.js';
import { handleLogin } from '../controllers/userController.js';

const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', getHomePage);
    router.get('/hieutoki', HomePage);
    router.get('/crud', getCRUD);
    router.post('/post-crud', postCRUD);
    router.get('/get-crud', displayGetCRUD);
    router.get('/edit-crud', getEidtCRUD);
    router.post('/put-crud', putCRUD);
    router.get('/delete-crud', deleteCRUD);

    router.post('/api/login', handleLogin)
    app.use('/', router);
};

export default initWebRoutes;

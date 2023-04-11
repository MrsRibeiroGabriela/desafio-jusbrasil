import express from 'express';
import {
    getRecordByCNJ,
    getRecordsByCourt,
    getAllCourts,
} from '../controllers/recordsControllers.js';

const routes = express.Router();

routes.get('/api/record', getRecordByCNJ);
routes.get('/api/records', getRecordsByCourt);
routes.get('/api/courts', getAllCourts);

export default routes;
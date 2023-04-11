import express from 'express';
import {
    getRecordByCNJ,
    getRecordsByCourt,
    getAllCourts,
} from '../controllers/recordsControllers.js';

const routes = express.Router();

routes.get('/record', getRecordByCNJ);
routes.get('/records', getRecordsByCourt);
routes.get('/courts', getAllCourts);

export default routes;
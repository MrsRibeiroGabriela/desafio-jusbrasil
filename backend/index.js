import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';

const app = express();

app.use(cors());

app.use(express.json());

const port = 3001;

app.use(routes);
//server
app.listen(port, () => console.log(`Listening on port ${port}`));
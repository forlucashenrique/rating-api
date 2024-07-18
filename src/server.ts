import express from 'express';
import cors from 'cors';
import { router } from './routers/index';
import { connectDB } from './config/db';
import swaggerUi from 'swagger-ui-express';

export const app = express();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use('/api/v1', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('../swagger.json')));

app.listen(process.env.PORT || 3333, () => {
    console.log(`Server is running on port ${process.env.PORT || 3333}`);
});
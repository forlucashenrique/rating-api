import { Router} from 'express';
import { createRating, deleteRating, getRating, getRatings, updateRating } from '../controllers/RatingControllers';
import { authMiddleware } from '../middlewares/authMiddleware';
import { validateData } from '../middlewares/validationMiddleware';
import { ratingSchema } from '../schemas/ratingSchemas';

export const ratingRoutes: Router = Router();

ratingRoutes.post('/create', validateData(ratingSchema), authMiddleware, createRating)
ratingRoutes.get('/', authMiddleware, getRatings)
ratingRoutes.get('/:id', authMiddleware, getRating)
ratingRoutes.patch('/:id', validateData(ratingSchema), authMiddleware, updateRating)
ratingRoutes.delete('/:id', authMiddleware, deleteRating)
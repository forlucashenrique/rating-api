import  { Router } from 'express';
import { usersRoutes } from './usersRoutes';
import { authRoutes } from './authRoutes';
import { ratingRoutes } from './ratingRoutes';

export const router: Router = Router();

router.use('/users', usersRoutes);
router.use('/auth', authRoutes);
router.use('/rating', ratingRoutes)

import express from 'express';
import { usersRoutes } from './usersRoutes';

export const router = express.Router();

router.use('/users', usersRoutes);

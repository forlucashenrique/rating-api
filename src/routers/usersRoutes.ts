
import { createUser, getUser, getUsers, updateUser } from '../controllers/UsersControllers';
import { Router, Request, Response} from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { login } from '../controllers/AuthControllers';

export const usersRoutes = Router();

usersRoutes.get('/', authMiddleware, getUsers)
usersRoutes.get('/:id', authMiddleware, getUser)
usersRoutes.patch('/', authMiddleware, updateUser)
usersRoutes.post('/register', createUser)
usersRoutes.post('/login', login)

import { createUser, getUser, getUsers, updateUser } from '../controllers/UsersControllers';
import { Router} from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { userRegisterSchema } from '../schemas/userSchemas';
import { validateData } from '../middlewares/validationMiddleware';

export const usersRoutes: Router = Router();

usersRoutes.get('/', authMiddleware, getUsers)
usersRoutes.get('/:id', authMiddleware, getUser)
usersRoutes.patch('/', authMiddleware, updateUser)
usersRoutes.post('/register', validateData(userRegisterSchema), createUser)
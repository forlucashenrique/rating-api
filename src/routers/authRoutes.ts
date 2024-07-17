import { Router} from 'express';
import { login as LoginController } from '../controllers/AuthControllers';
import { validateData } from '../middlewares/validationMiddleware';
import { userLoginSchema } from '../schemas/userSchemas';

export const authRoutes: Router = Router();

authRoutes.post('/login', validateData(userLoginSchema), LoginController)
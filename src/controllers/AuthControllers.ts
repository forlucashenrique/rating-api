import {Request, Response} from 'express';
import { executeRegister } from '../repositories/AuthRespository';
import { generateJwtToken } from '../utils/JwtService';

import bcrypt from 'bcryptjs';


export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'InvalidBody' });
        }

        const user = await executeRegister(email);

        if (!user) {
            return res.status(404).json({ message: 'InvalidCredentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'InvalidCredentials' });
        }

        res.status(201).json({
            user, 
            token: generateJwtToken({ id: user._id })
        });

    } catch (error) {
        res.status(500).json({ message: 'Login Internal server error' });
    }
}
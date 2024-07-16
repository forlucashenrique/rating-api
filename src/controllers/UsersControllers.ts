import {Request, Response} from 'express';
import { executeCreateUser, executeGetUser, executeGetUsers, executeUpdateUser } from '../repositories/UsersRespository';


export const createUser = async (req: Request, res: Response) => {
    try {
         const response = await executeCreateUser(req.body);  

         if (response.error) {
            return res.status(400).json({ message: response.message });
         }

         res.status(201).json({
            message: response.message,
            data: response.data,
            token: response.token
         });

    } catch(err) {
        res.status(500).json({ message: 'Internal server error' });
    }

}


export const getUsers = async (req: Request, res: Response) => {
    try {

        const users = await executeGetUsers();

        res.status(200).json({
            data: users
        })

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}


export const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const user = await executeGetUser(id);

        if (!user) {
            return res.status(404).json({ message: 'UserNotFound' });
        }

        res.status(200).json({
            data: user
        });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.body;

        const user = await executeGetUser(userId);

        if (!user) {
            return res.status(404).json({ message: 'UserNotFound' });
        }

        await executeUpdateUser(userId, req.body);

        res.status(200).json({
           message: 'UserUpdated'
        });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}
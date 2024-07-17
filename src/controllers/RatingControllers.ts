
import { Request, Response } from 'express';
import { execDeleteRating, execGetRating, execGetRatings, execUpdateRating, executeCreateRating } from '../repositories/RatingRepository';


export const createRating = async (req: Request, res: Response) => {
    try {
        const { userId, rating, comment } = req.body;

        const ratingCreated = await executeCreateRating({
            userId: userId,
            rating,
            comment
        });

        res.status(201).json({
            data: ratingCreated
        });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}


export const getRatings = async (req: Request, res: Response) => {
    try {
        const ratings = await execGetRatings();

        res.status(200).json({
            data: ratings
        });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getRating = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const rating = await execGetRating(id);

        if (!rating) {
            return res.status(404).json({ message: 'RatingNotFound' });
        }

        res.status(200).json({
            data: rating
        });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateRating = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { userId, rating, comment } = req.body;

        const ratingUpdated = await execUpdateRating(id, {
            userId: userId,
            rating,
            comment
        });

        res.status(200).json({
            data: ratingUpdated
        });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}


export const deleteRating = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        await execDeleteRating(id);

        res.status(200).json({
            message: 'RatingDeleted'
        });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}
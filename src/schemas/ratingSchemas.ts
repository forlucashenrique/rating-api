import { z } from 'zod';


export const ratingSchema = z.object({
    rating: z.number().int().min(1).max(5),
    comment: z.string().min(3),
})
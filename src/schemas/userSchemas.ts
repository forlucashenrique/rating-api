import { z } from 'zod';

export const userRegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().min(3),
})


export const userLoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})
import { z } from 'zod';
export const signupInput = z.object({
    name: z.string().optional(),
    email: z.string().email(),
    password: z.string().min(5)
});
export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(5),
});
export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
});
export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
});

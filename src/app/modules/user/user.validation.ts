import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Password is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
    name: z.object({
      firstName: z.string({
        required_error: 'First name is required',
      }),
      lastName: z.string({
        required_error: 'Last name is required',
      }),
    }),
  }),
});

const updateUserZodSchema = z.object({
  body: z.object({
    email: z.string().optional(),
    password: z.string().optional(),
    name: z.object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
    }),
  }),
});

export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema,
};

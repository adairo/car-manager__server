import { z } from "zod";

const userSchema = z.object({
  id: z.number().int(),
  email: z.string().email(),
  password: z.string(),
});

export const registerUser = z.object({
  body: userSchema.omit({ id: true }),
});

export const login = z.object({
  query: userSchema.omit({ id: true }),
});

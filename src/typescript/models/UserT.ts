import { z } from 'zod';

export const userSchema = z.object({
  id: z.number(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  appleId: z.number().nullable(),
  notifications: z.boolean(),
});

export interface UserT extends z.infer<typeof userSchema> {}

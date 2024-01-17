import { z } from 'zod';

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  notifications: boolean;
}

export const loginResponseSchema = z.object({
  token: z.string(),
});

export interface LoginResponseDto extends z.infer<typeof loginResponseSchema> {}

import { z } from 'zod';

const envSchema = z.object({
  TEST: z.string(),
});

export const myEnv = () => {
  try {
    const validatedEnv = envSchema.parse({
      TEST: import.meta.env.VITE_REACT_APP_TEST,
    });
    return validatedEnv;
  } catch (error) {
    throw new Error(`Invalid environment variables. zod: ${error}`);
  }
};

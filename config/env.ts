import { z } from "zod";

export const envSchema = z.object({
  EXPO_PUBLIC_API_URL: z.string().url(),
});

const env = envSchema.parse(process.env)

export default env

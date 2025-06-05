import { z } from "zod";

export const envSchema = z.object({
  api: z.string().url(),
});

const env = envSchema.parse(process.env)

export default env

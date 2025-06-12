import { getTranslation } from "@utils";
import * as z from "zod";

export const getSignInFormSchema = () =>
  z.object({
    email: z
      .string()
      .email({
        message: getTranslation("errorMessages.shared.invalidEmailFormat"),
      }),
    password: z
      .string()
      .min(6, {
        message: getTranslation("errorMessages.auth.signin.invalidPassword"),
      }),
  });

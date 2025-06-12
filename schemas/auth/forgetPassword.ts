import { getTranslation } from "@utils";
import * as z from "zod";

export const FORGET_PASSWORD_FORM_SCHEMA = () =>
  z.object({
    email: z
      .string()
      .email({
        message: getTranslation("errorMessages.shared.invalidEmailFormat"),
      }),
  });

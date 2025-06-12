import { getTranslation } from '@utils'
import * as z from 'zod'


export const RESET_PASSWORD_FORM_SCHEMA = () =>
  z
    .object({
      password: z
        .string()
        .min(8, {
          message: getTranslation('errorMessages.shared.passwordTooShort')
        })
        .regex(/[a-zA-Z]/, {
          message: getTranslation('errorMessages.shared.passwordNoLetter')
        })
        .regex(/\d/, {
          message: getTranslation('errorMessages.shared.passwordNoNumber')
        })
        .regex(/[!@#$%^&*(),.?":{}|<>]/, {
          message: getTranslation('errorMessages.shared.passwordNoSymbol')
        }),

      confirmPassword: z.string()
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ['confirmPassword'],
      message: getTranslation('errorMessages.shared.passwordsDontMatch')
    })

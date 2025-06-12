import * as z from 'zod'
import { getTranslation } from '@utils'
import { isValidPhoneNumber } from 'libphonenumber-js'

export const USER_SIGN_UP_FORM_SCHEMA = () =>
  z.object({
    isEdit: z.boolean().optional().default(false),

    name: z
      .string()
      .min(3, { message: getTranslation('errorMessages.shared.nameTooShort') })
      .max(50, { message: getTranslation('errorMessages.shared.nameTooLong') }),

    username: z
      .string()
      .min(3, { message: getTranslation('errorMessages.shared.usernameTooShort') })
      .max(50, { message: getTranslation('errorMessages.shared.usernameTooLong') }),

    phone: z.string().refine((value) => isValidPhoneNumber(value), {
      message: getTranslation('errorMessages.shared.invalidPhone')
    }),

    whatsapp: z.string().refine((value) => !value || isValidPhoneNumber(value), {
      message: getTranslation('errorMessages.shared.invalidWhatsapp')
    }),

    sameAsWhatsapp: z.boolean().optional().default(false),

    email: z
      .string()
      .email({ message: getTranslation('errorMessages.shared.invalidEmailFormat') }),

    password: z.string().optional(),
    confirmPassword: z.string().optional()
  })

export const USER_SIGN_UP_FORM_SCHEMA_WITH_EFFECTS = () =>
  USER_SIGN_UP_FORM_SCHEMA()
    .superRefine((data, ctx) => {
      const { isEdit, password, confirmPassword } = data

      const shouldValidatePassword = !isEdit || password || confirmPassword

      if (shouldValidatePassword) {
        if (!password) {
          ctx.addIssue({
            path: ['password'],
            message: getTranslation('errorMessages.shared.required', {
              field: getTranslation('screens.signUp.signUpForm.password')
            }),
            code: z.ZodIssueCode.custom
          })
        } else {
          if (password.length < 8) {
            ctx.addIssue({
              path: ['password'],
              message: getTranslation('errorMessages.shared.passwordTooShort'),
              code: z.ZodIssueCode.custom
            })
          }
          if (!/[a-zA-Z]/.test(password)) {
            ctx.addIssue({
              path: ['password'],
              message: getTranslation('errorMessages.shared.passwordNoLetter'),
              code: z.ZodIssueCode.custom
            })
          }
          if (!/\d/.test(password)) {
            ctx.addIssue({
              path: ['password'],
              message: getTranslation('errorMessages.shared.passwordNoNumber'),
              code: z.ZodIssueCode.custom
            })
          }
          if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            ctx.addIssue({
              path: ['password'],
              message: getTranslation('errorMessages.shared.passwordNoSymbol'),
              code: z.ZodIssueCode.custom
            })
          }
        }

        if (password !== confirmPassword) {
          ctx.addIssue({
            path: ['confirmPassword'],
            message: getTranslation('errorMessages.shared.passwordsDontMatch'),
            code: z.ZodIssueCode.custom
          })
        }
      }

      if (!data.sameAsWhatsapp && !data.whatsapp) {
        ctx.addIssue({
          path: ['whatsapp'],
          message: getTranslation('errorMessages.shared.whatsappRequired'),
          code: z.ZodIssueCode.custom
        })
      }
    })
    .transform((data) => {
      const { sameAsWhatsapp, isEdit, password, confirmPassword, ...rest } =
        data

      const cleanedData = {
        ...rest,
        phone: rest.phone.replaceAll(' ', ''),
        whatsapp: sameAsWhatsapp
          ? rest.phone.replaceAll(' ', '')
          : rest.whatsapp?.replaceAll(' ', '')
      }

      if (!isEdit) {
        // Only include password fields when NOT editing
        return {
          ...cleanedData,
          password,
          confirmPassword
        }
      }

      return cleanedData
    })

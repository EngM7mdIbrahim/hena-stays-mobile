import { AppDictionary } from "@interfaces/i18n";

const signIn = "Sign In";
const signUp = "Sign Up";

export const en: AppDictionary = {
  screens: {
    welcome: {
      header: {
        title: "Welcome",
      },
      title: "Hena Stays",
      description:
        "Discover your renting space with our curated listings and personalized search tools.",
      signInButton: signIn,
      signUpButton: signUp,
    },
    signIn: {
      header: {
        title: signIn,
      },
      title: signIn,
      signInForm: {
        email: "Email",
        password: "Password",
        submitButton: signIn,
      },
      signUpButton: "Don't have an account? Sign Up",
    },
    userTypeSelection: {
      header: {
        title: "Who are you?",
      },
      title: "Who are you?",
      userOptions: {
        user: {
          title: "User",
          body: "Find your dream home",
        },
        broker: {
          title: "Broker",
          body: "Find your next property",
        },
      },
      continueButton: "Continue",
    },
    signUp: {
      header: {
        title: signUp,
      },
      title: signUp,
      signUpForm: {
        name: "Name",
        username: "Username",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password",
        submitButton: signUp,
      },
      signInButton: "Already have an account? Sign In",
    },
  },
  errorMessages: {
    shared: {
      required: "%{field}! is required",
      mediaUploadFailed: "Media upload failed",
      invalidEmailFormat: "Please enter a valid email address",
      whatsappRequired:
        "WhatsApp number is required if not the same as the phone number",
      invalidPhone: "Invalid phone number",
      invalidWhatsapp: "Invalid WhatsApp number",
      nameTooShort: "Name must be at least 3 characters",
      nameTooLong: "Name must be less than 50 characters",
      usernameTooShort: "Username must be at least 3 characters",
      usernameTooLong: "Username must be less than 50 characters",
      passwordTooShort: "Password must be at least 8 characters",
      passwordNoLetter: "Password must contain at least one letter",
      passwordNoNumber: "Password must contain at least one number",
      passwordNoSymbol: "Password must contain at least one symbol",
      passwordsDontMatch: "Passwords do not match",
    },
    unsupportedUser:
      "You are not supported by this app, please go to the website: https://henastays.com",
    auth: {
      signin: {
        invalidPassword: "Password must be at least 6 characters",
      },
      signup: {
        agent: {
          cityTooLong: "City must be less than 100 characters",
          licenseTooLong: "License must be less than 50 characters",
          licenseCopyRequired: "At least one license copy is required",
          licenseExpiryFuture: "License expiry date must be in the future",
        },
      },
    },
  },
  successMessages: {
    addedSuccessfully: "%{item}! added successfully",
    updatedSuccessfully: "%{item}! updated successfully",
    deletedSuccessfully: "%{item}! deleted successfully",
    loggedInSuccessfully: "Logged in successfully",
    loggedOutSuccessfully: "Logged out successfully",
    passwordChangedSuccessfully: "Password changed successfully",
    passwordResetSuccessfully: "Password reset successfully",
    passwordResetEmailSent: "Password reset email sent",
    otpSentSuccessfully: "OTP sent successfully",
    otpVerifiedSuccessfully: "OTP verified successfully",
    createdSuccessfully: "Created %{item}! successfully",
    unsavedSuccessfully: "%{item}! unsaved successfully",
    savedSuccessfully: "%{item}! saved successfully",
    statusUpdatedSuccessfully: "%{item}! status updated successfully",
  },
} satisfies AppDictionary;

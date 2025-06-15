import { KeyPaths } from "@commonTypes";
import { Language } from "@enums";

export interface BaseScreenAppDictionary {
  header: {
    title: string;
  };
  title: string;
}
export interface RadioButtonAppDictionary {
  title: string;
  body: string;
}

export type DictionaryMap = Record<Language, AppDictionary>;

export interface AppDictionary {
  screens: {
    signIn: BaseScreenAppDictionary & {
      signInForm: {
        email: string;
        password: string;
        submitButton: string;
      };
      signUpButton: string;
    };
    welcome: BaseScreenAppDictionary & {
      description: string;
      signInButton: string;
      signUpButton: string;
    };
    userTypeSelection: BaseScreenAppDictionary & {
      userOptions: {
        user: RadioButtonAppDictionary;
        broker: RadioButtonAppDictionary;
      };
      continueButton: string;
    };
    signUp: BaseScreenAppDictionary & {
      signUpForm: {
        name: string;
        username: string;
        email: string;
        password: string;
        confirmPassword: string;
        submitButton: string;
      };
      signInButton: string;
    };
  },
  errorMessages: {
    shared: {
      required: string;
      mediaUploadFailed: string;
      invalidEmailFormat: string;
      whatsappRequired: string;
      invalidPhone: string;
      invalidWhatsapp: string;
      nameTooShort: string;
      nameTooLong: string;
      usernameTooShort: string;
      usernameTooLong: string;
      passwordTooShort: string;
      passwordNoLetter: string;
      passwordNoNumber: string;
      passwordNoSymbol: string;
      passwordsDontMatch: string;
    },
    unsupportedUser: string;
    auth: {
      signin: {
        invalidPassword: string;
      },
      signup: {
        agent: {
          cityTooLong: string;
          licenseTooLong: string;
          licenseCopyRequired: string;
          licenseExpiryFuture: string;
        },
      },
    },
  };
  successMessages: {
    addedSuccessfully: string;
    updatedSuccessfully: string;
    deletedSuccessfully: string;
    loggedInSuccessfully: string;
    loggedOutSuccessfully: string;
    passwordChangedSuccessfully: string;
    passwordResetSuccessfully: string;
    passwordResetEmailSent: string;
    otpSentSuccessfully: string;
    otpVerifiedSuccessfully: string;
    createdSuccessfully: string;
    unsavedSuccessfully: string;
    savedSuccessfully: string;
    statusUpdatedSuccessfully: string;
  };
}

export type AppDictionaryKeyPaths = KeyPaths<AppDictionary>;

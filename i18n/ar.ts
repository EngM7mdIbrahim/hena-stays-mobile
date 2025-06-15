import { AppDictionary } from "@interfaces/i18n";

const signIn = "تسجيل الدخول";
const signUp = "تسجيل حساب";

export const ar: AppDictionary = {
  screens: {
    welcome: {
      header: {
        title: "مرحبا",
      },
      title: "هينا ستايز",
      description:
        "اكتشف مساحتك المستأجرة مع قوائمنا المختارة وأدوات البحث الشخصية.",
      signInButton: signIn,
      signUpButton: signUp,
    },
    signIn: {
      header: {
        title: signIn,
      },
      title: signIn,
      signInForm: {
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        submitButton: signIn,
      },
      signUpButton: "ليس لديك حساب؟ تسجيل حساب",
    },
    userTypeSelection: {
      header: {
        title: "من أنت؟",
      },
      title: "من أنت؟",
      userOptions: {
        user: {
          title: "المستأجر",
          body: "اكتشف مساحتك المستأجرة",
        },
        broker: {
          title: "الوكيل",
          body: "اكتشف العقار التالي",
        },
      },
      continueButton: "استمرار",
    },
    signUp: {
      header: {
        title: signUp,
      },
      title: signUp,
      signUpForm: {
        name: "الاسم",
        username: "اسم المستخدم",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        confirmPassword: "تأكيد كلمة المرور",
        submitButton: signUp,
      },
      signInButton: "لديك حساب؟ تسجيل الدخول",
    },
  },
  errorMessages: {
    shared: {
      required: "%{field}! مطلوب",
      mediaUploadFailed: "فشل تحميل الوسائط",
      invalidEmailFormat: "البريد الإلكتروني غير صالح",
      whatsappRequired: "يجب أن يكون لديك رقم واتساب",
      invalidPhone: "رقم الهاتف غير صالح",
      invalidWhatsapp: "رقم واتساب غير صالح",
      nameTooShort: "الاسم غير صالح",
      nameTooLong: "الاسم غير صالح",
      usernameTooShort: "اسم المستخدم غير صالح",
      usernameTooLong: "اسم المستخدم غير صالح",
      passwordTooShort: "كلمة المرور غير صالحة",
      passwordNoLetter: "كلمة المرور غير صالحة",
      passwordNoNumber: "كلمة المرور غير صالحة",
      passwordNoSymbol: "كلمة المرور غير صالحة",
      passwordsDontMatch: "كلمات المرور غير متطابقة",
    },
    unsupportedUser:
      "أنت غير مدعوم من هذا التطبيق، يرجى الذهاب إلى الموقع: https://henastays.com",
    auth: {
      signin: {
        invalidPassword: "كلمة المرور غير صالحة",
      },
      signup: {
        agent: {
          cityTooLong: "المدينة غير صالحة",
          licenseTooLong: "الرخصة غير صالحة",
          licenseCopyRequired: "يجب أن يكون لديك عدد من الرخصات",
          licenseExpiryFuture: "تاريخ انتهاء الرخصة غير صالح",
        },
      },
    },
  },
  successMessages: {
    addedSuccessfully: "%{item}! أضيف بنجاح",
    updatedSuccessfully: "%{item}! تم تحديثه بنجاح",
    deletedSuccessfully: "%{item}! تم حذفه بنجاح",
    loggedInSuccessfully: "تم تسجيل الدخول بنجاح",
    loggedOutSuccessfully: "تم تسجيل الخروج بنجاح",
    passwordChangedSuccessfully: "تم تغيير كلمة المرور بنجاح",
    passwordResetSuccessfully: "تم إعادة تعيين كلمة المرور بنجاح",
    passwordResetEmailSent: "تم إرسال بريد إلكتروني لإعادة تعيين كلمة المرور",
    otpSentSuccessfully: "تم إرسال رمز التحقق بنجاح",
    otpVerifiedSuccessfully: "تم التحقق من رمز التحقق بنجاح",
    createdSuccessfully: "تم إنشاء %{item}! بنجاح",
    unsavedSuccessfully: "%{item}! تم إلغاؤه بنجاح",
    savedSuccessfully: "%{item}! تم حفظه بنجاح",
    statusUpdatedSuccessfully: "%{item}! تم تحديث حالته بنجاح",
  },
} satisfies AppDictionary;

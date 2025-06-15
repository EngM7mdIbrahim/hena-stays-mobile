import React from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Container } from "@components/Container";
import { Button } from "@components/Button";
import Screen from "@components/Screen";
import { appNotifications, getTranslation } from "@utils";
import { AppText } from "@components/AppText";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { USER_SIGN_UP_FORM_SCHEMA_WITH_EFFECTS } from "@schemas/auth/signupUser";
import { z } from "zod";
import {
  FormCheckbox,
  FormPhoneNumberTextbox,
  FormTextBox,
} from "@components/form";
import { useRegisterUser } from "@hooks";
import { UserRole } from "@commonTypes";
import { DEFAULT_USER_SIGNUP_FORM_DATA } from "@constants";
import clsx from "clsx";
import { AuthStackScreenProps } from "@interfaces";
import { useAuthStore } from "@store";

export const UserSignupScreen = ({
  navigation,
}: AuthStackScreenProps<"UserSignup">) => {
  const singUpSchemaWithEffects = USER_SIGN_UP_FORM_SCHEMA_WITH_EFFECTS();
  const { setUser } = useAuthStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<z.input<typeof singUpSchemaWithEffects>>({
    resolver: zodResolver(singUpSchemaWithEffects),
    defaultValues: DEFAULT_USER_SIGNUP_FORM_DATA,
  });
  const { mutate: registerUser, isPending } = useRegisterUser({
    onSuccess: ({ user }) => {
      appNotifications.success("User registered successfully");
      setUser(user);
      navigation.navigate("OTP", { email: user.email });
    },
  });

  const onSubmit = (data: z.infer<typeof singUpSchemaWithEffects>) => {
    registerUser({
      ...data,
      role: UserRole.User,
    });
  };


  return (
    <Screen>
      <ImageBackground
        source={require("@assets/welcome-hero.png")}
        className="w-full h-64"
        resizeMode="cover"
      />
      <Container passedClassName="flex-col gap-3 mt-3" fullScreen>
        <AppText className="text-text text-title font-bold leading-tight tracking-tight text-start">
          {getTranslation("screens.signUp.header.title")}
        </AppText>
        <View className="flex flex-col gap-2 pb-2">
          <FormTextBox
            placeholder={getTranslation("screens.signUp.signUpForm.name")}
            control={control}
            name="name"
            passedClassName="mb-2"
            autoCapitalize="words"
            returnKeyType="next"
            errorMessage={errors.name?.message}
          />
          <FormTextBox
            placeholder={getTranslation("screens.signUp.signUpForm.username")}
            control={control}
            name="username"
            passedClassName="mb-2"
            autoCapitalize="none"
            returnKeyType="next"
            errorMessage={errors.username?.message}
          />
          <FormTextBox
            placeholder={getTranslation("screens.signUp.signUpForm.email")}
            control={control}
            name="email"
            passedClassName="mb-2"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            errorMessage={errors.email?.message}
          />
          <FormTextBox
            placeholder={getTranslation("screens.signUp.signUpForm.password")}
            control={control}
            name="password"
            passedClassName="mb-2"
            secureTextEntry
            returnKeyType="done"
            errorMessage={errors.password?.message}
          />
          <FormTextBox
            placeholder={getTranslation(
              "screens.signUp.signUpForm.confirmPassword"
            )}
            control={control}
            name="confirmPassword"
            passedClassName="mb-2"
            secureTextEntry
            returnKeyType="done"
            errorMessage={errors.confirmPassword?.message}
          />
          <FormPhoneNumberTextbox
            control={control}
            name="phone"
            placeholder={getTranslation("screens.signUp.signUpForm.phone")}
            passedClassName="mb-2"
            errorMessage={errors.phone?.message}
          />
          {!watch("sameAsWhatsapp") && (
            <FormPhoneNumberTextbox
              control={control}
              name="whatsapp"
              placeholder={getTranslation("screens.signUp.signUpForm.whatsapp")}
              passedClassName="mb-2"
              errorMessage={errors.whatsapp?.message}
            />
          )}
          <FormCheckbox
            control={control}
            name="sameAsWhatsapp"
            label={getTranslation("screens.signUp.signUpForm.sameAsWhatsapp")}
            passedClassName="mb-2"
          />
        </View>
        <View className="flex-1">
          <Button
            variant="primary"
            passedClassName={clsx(isPending && "animate-bounce")}
            onPress={handleSubmit(onSubmit)}
          >
            {getTranslation("screens.signUp.signUpForm.submitButton")}
          </Button>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <AppText className="text-[#677683] text-sm font-normal leading-normal pb-3 pt-1 text-center underline">
            {getTranslation("screens.signUp.signInButton")}
          </AppText>
        </TouchableOpacity>
      </Container>
    </Screen>
  );
};

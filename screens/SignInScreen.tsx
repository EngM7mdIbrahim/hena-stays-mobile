import React from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { Container } from "@components/Container";
import { Button } from "@components/Button";
import Screen from "@components/Screen";
import { useLogin } from "@hooks";
import clsx from "clsx";
import { AuthStackScreenProps } from "@interfaces";
import { appNotifications, getTranslation } from "@utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSignInFormSchema } from "@schemas/auth";
import { FormTextBox } from "@components/form";
import { z } from "zod";
import { AppText } from "@components/AppText";

export const SignInScreen = ({
  navigation,
}: AuthStackScreenProps<"Signin">) => {
  const formSchema = getSignInFormSchema();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });
  const { mutate: signIn, isPending } = useLogin({
    onSuccess: () => {
      appNotifications.success("Login successful");
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    signIn(data);
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
          {getTranslation("screens.signIn.title")}
        </AppText>

        <View className="flex flex-col gap-2 pb-2">
          <FormTextBox
            placeholder={getTranslation("screens.signIn.signInForm.email")}
            name="email"
            control={control}
            passedClassName="mb-2"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            errorMessage={errors.email?.message as string}
          />
          <FormTextBox
            placeholder={getTranslation("screens.signIn.signInForm.password")}
            name="password"
            control={control}
            passedClassName="mb-2"
            secureTextEntry
            returnKeyType="done"
            errorMessage={errors.password?.message}
          />
        </View>
        <View className="flex-1">
          <Button
            variant="primary"
            passedClassName={clsx(isPending && "animate-bounce")}
            onPress={handleSubmit(onSubmit)}
            disabled={isPending}
          >
            {getTranslation("screens.signIn.signInForm.submitButton")}
          </Button>
        </View>
        <TouchableOpacity
          disabled={isPending}
          onPress={() => navigation.navigate("UserTypeSelection")}
        >
          <AppText className="text-[#677683] text-sm font-normal leading-normal pb-3 pt-1 text-center underline">
            {getTranslation("screens.signIn.signUpButton")}
          </AppText>
        </TouchableOpacity>
      </Container>
    </Screen>
  );
};

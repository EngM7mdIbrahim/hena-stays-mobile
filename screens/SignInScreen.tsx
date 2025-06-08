import React, { useState } from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { Container } from "@components/Container";
import { TextBox } from "@components/TextBox";
import { Button } from "@components/Button";
import Screen from "@components/Screen";
import { useLogin } from "@hooks";
import clsx from "clsx";
import { AuthStackScreenProps } from "@interfaces";
import { Toast } from "react-native-toast-notifications";

export const SignInScreen = ({
  navigation,
}: AuthStackScreenProps<"Signin">) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutateAsync, isPending } = useLogin();
  return (
    <Screen>
      <ImageBackground
        source={require("@assets/welcome-hero.png")}
        className="w-full h-64"
        resizeMode="cover"
      />
      <Container passedClassName="flex-col gap-3 mt-3" fullScreen>
        <Text className="text-text text-title font-bold leading-tight tracking-tight text-start">
          Let's get you signed in
        </Text>

        <View className="flex flex-col gap-2 pb-2">
          <TextBox
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            passedClassName="mb-2"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
          />
          <TextBox
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            passedClassName="mb-2"
            secureTextEntry
            returnKeyType="done"
          />
        </View>
        <View className="flex-1">
          <Button
            variant="primary"
            passedClassName={clsx(isPending && "animate-bounce")}
            onPress={async () => {
              const response = await mutateAsync({ email, password })
              Toast.show("Done")
            }}
            disabled={isPending}
          >
            Sign in
          </Button>
        </View>
        <TouchableOpacity
          disabled={isPending}
          onPress={() => navigation.navigate("UserTypeSelection")}
        >
          <Text className="text-[#677683] text-sm font-normal leading-normal pb-3 pt-1 text-center underline">
            Don't have an account? Sign up
          </Text>
        </TouchableOpacity>
      </Container>
    </Screen>
  );
};

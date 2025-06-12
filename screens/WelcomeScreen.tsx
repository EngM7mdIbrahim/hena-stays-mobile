import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Button } from "../components/Button";
import Screen from "@components/Screen";
import { AuthStackScreenProps } from "@interfaces";
import { getTranslation } from "@utils";
import { AppText } from "@components/AppText";

export const WelcomeScreen = ({
  navigation,
}: AuthStackScreenProps<"Welcome">) => {
  return (
    <Screen containerClassName="justify-between" withSafeAreaView>
      <View>
        <ImageBackground
          source={require("../assets/welcome-hero.png")}
          className="w-full h-64"
          resizeMode="cover"
        />
        <AppText className="text-text text-title font-bold leading-tight tracking-tight px-4 text-center mt-6">
          {getTranslation("screens.welcome.title")}
        </AppText>
        <AppText className="text-text text-base font-normal leading-normal mt-2 px-4 text-center">
          {getTranslation("screens.welcome.description")}
        </AppText>
      </View>
      <View className="flex flex-col px-4 gap-3">
        <Button variant="primary" onPress={() => navigation.navigate("Signin")}>
          {getTranslation("screens.welcome.signInButton")}
        </Button>
        <Button
          variant="secondary"
          onPress={() => navigation.navigate("UserTypeSelection")}
        >
          {getTranslation("screens.welcome.signUpButton")}
        </Button>
      </View>
    </Screen>
  );
};

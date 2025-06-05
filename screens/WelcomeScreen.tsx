import React from "react";
import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import { Button } from "../components/Button";
import Screen from "@components/Screen";

export const WelcomeScreen = ({ navigation }: any) => {
  return (
    <Screen containerClassName="justify-between" withSafeAreaView>
      <View>
        <ImageBackground
          source={require("../assets/welcome-hero.png")}
          className="w-full h-64"
          resizeMode="cover"
        />
        <Text className="text-text text-title font-bold leading-tight tracking-tight px-4 text-center mt-6">
          Hena Stays
        </Text>
        <Text className="text-text text-base font-normal leading-normal mt-2 px-4 text-center">
          Discover your renting space with our curated listings and personalized
          search tools.
        </Text>
      </View>
      <View className="flex flex-col px-4 gap-3">
        <Button variant="primary" onPress={() => navigation.navigate("Signin")}>
          Sign In
        </Button>
        <Button
          variant="secondary"
          onPress={() => navigation.navigate("UserTypeSelection")}
        >
          Sign Up
        </Button>
      </View>
    </Screen>
  );
};

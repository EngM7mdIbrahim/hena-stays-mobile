import React from "react";
import { Text } from "react-native";
import { Container } from "@components/Container";
import Screen from "@components/Screen";

export const BrokerSignupScreen = () => {
  return (
    <Screen withFullScreenContainer>
      <Text className="text-text text-2xl font-bold text-center mt-10">
        Broker Sign Up
      </Text>
    </Screen>
  );
};

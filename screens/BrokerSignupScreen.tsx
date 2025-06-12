import React from "react";
import Screen from "@components/Screen";
import { AppText } from "@components/AppText";

export const BrokerSignupScreen = () => {
  return (
    <Screen withFullScreenContainer>
      <AppText className="text-text text-2xl font-bold text-center mt-10">
        Broker Sign Up
      </AppText>
    </Screen>
  );
};

import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { RadioOption } from "@components/RadioOption";
import { Button } from "@components/Button";
import { Container } from "@components/Container";
import Screen from "@components/Screen";
import { getTranslation } from "@utils";
import { AppText } from "@components/AppText";

export const UserTypeSelectionScreen = ({ navigation }: any) => {
  const [selected, setSelected] = useState<"UserSignup" | "BrokerSignup">(
    "UserSignup"
  );

  return (
    <Screen>
      <ImageBackground
        source={require("@assets/welcome-hero.png")}
        className="w-full h-64"
        resizeMode="cover"
      />
      <Container passedClassName="mt-3" fullScreen>
        <AppText className="text-text text-title font-bold leading-tight tracking-tight text-start">
          {getTranslation("screens.userTypeSelection.title")}
        </AppText>
        <View className="w-full flex flex-col py-2">
          <RadioOption
            label={getTranslation("screens.userTypeSelection.userOptions.user.title")}
            description={getTranslation("screens.userTypeSelection.userOptions.user.body")}
            selected={selected === "UserSignup"}
            onPress={() => setSelected("UserSignup")}
          />
          <RadioOption
            label={getTranslation("screens.userTypeSelection.userOptions.broker.title")}
            description={getTranslation("screens.userTypeSelection.userOptions.broker.body")}
            selected={selected === "BrokerSignup"}
            onPress={() => setSelected("BrokerSignup")}
          />
        </View>
        <View className="flex-1 justify-end">
          <Button variant="primary" onPress={() => navigation.navigate(selected)}>
            {getTranslation("screens.userTypeSelection.continueButton")}
          </Button>
        </View>
      </Container>
    </Screen>
  );
};

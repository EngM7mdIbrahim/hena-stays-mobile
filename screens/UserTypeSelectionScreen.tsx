import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { RadioOption } from "@components/RadioOption";
import { Button } from "@components/Button";
import { Container } from "@components/Container";
import Screen from "@components/Screen";

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
        <Text className="text-text text-title font-bold leading-tight tracking-tight text-start">
          Tell us who you are
        </Text>
        <View className="w-full flex flex-col py-2">
          <RadioOption
            label="User"
            description="Find your dream home"
            selected={selected === "UserSignup"}
            onPress={() => setSelected("UserSignup")}
          />
          <RadioOption
            label="Broker"
            description="List and manage properties"
            selected={selected === "BrokerSignup"}
            onPress={() => setSelected("BrokerSignup")}
          />
        </View>
        <View className="flex-1 justify-end">
          <Button variant="primary" onPress={() => navigation.navigate(selected)}>
            Continue
          </Button>
        </View>
      </Container>
    </Screen>
  );
};

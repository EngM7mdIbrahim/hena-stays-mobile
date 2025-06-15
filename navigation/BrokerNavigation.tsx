import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BrokerStackParamList } from "@interfaces";
import { BrokerTabNavigation } from "./BrokerTabNavigation";

const Stack = createNativeStackNavigator<BrokerStackParamList>();

export const BrokerNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name="Home"
        component={BrokerTabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

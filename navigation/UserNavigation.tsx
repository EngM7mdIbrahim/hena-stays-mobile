import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserStackParamList } from "@interfaces";
import { UserTabNavigation } from "./UserTabNavigation";

const Stack = createNativeStackNavigator<UserStackParamList>();

export const UserNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name="Home"
        component={UserTabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

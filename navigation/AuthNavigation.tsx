import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeScreen } from "@screens/WelcomeScreen";
import { UserTypeSelectionScreen } from "@screens/UserTypeSelectionScreen";
import { UserSignupScreen } from "@screens/UserSignupScreen";
import { BrokerSignupScreen } from "@screens/BrokerSignupScreen";
import { SignInScreen } from "@screens/SignInScreen";
import { AuthStackParamList } from "@interfaces";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserTypeSelection"
        component={UserTypeSelectionScreen}
        options={{ title: "Who are you?" }}
      />
      <Stack.Screen
        name="UserSignup"
        component={UserSignupScreen}
        options={{ title: "Sign Up" }}
      />
      <Stack.Screen
        name="BrokerSignup"
        component={BrokerSignupScreen}
        options={{ title: "Sign Up" }}
      />
      <Stack.Screen
        name="Signin"
        component={SignInScreen}
        options={{ title: "Sign in" }}
      />
    </Stack.Navigator>
  );
};

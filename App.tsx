import React from "react";
import { colorScheme } from "nativewind";
import { AuthNavigation } from "@navigation/AuthNavigation";
import "./global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastProvider } from "react-native-toast-notifications";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

colorScheme.set("light");

export default function App() {
  const queryClient = new QueryClient();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <ToastProvider placement="top" offset={100}>
            <AuthNavigation />
          </ToastProvider>
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

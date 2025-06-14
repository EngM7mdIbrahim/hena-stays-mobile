import React from "react";
import { AuthNavigation } from "@navigation/AuthNavigation";
import "./global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastProvider } from "react-native-toast-notifications";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { initiateInitializers } from "@initializers";
import { useAuthStore } from "@store";
import { NavigationManager } from "@navigation";

initiateInitializers();
export default function App() {
  const queryClient = new QueryClient();
  const { user, authToken } = useAuthStore();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <ToastProvider placement="top" offset={100}>
            <NavigationManager />
          </ToastProvider>
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

import React from "react";
import { colorScheme } from "nativewind";
import { AuthNavigation } from "@navigation/AuthNavigation";
import "./global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

colorScheme.set("light");

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthNavigation />
    </QueryClientProvider>
  );
}

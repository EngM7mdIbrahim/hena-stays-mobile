import * as SecureStore from "expo-secure-store";
import { SecureStorageInstance } from "@interfaces";

export function getSecureStorage(): SecureStorageInstance {
  return {
    setItem: async (key: string, value: string) =>
      await SecureStore.setItemAsync(key, value),
    getItem: async (key: string) => await SecureStore.getItemAsync(key),
    removeItem: async (key: string) => await SecureStore.deleteItemAsync(key),
  };
}

import { User } from "@commonTypes";
import { SECURE_STORAGE_KEYS } from "@constants";
import { AuthStoreState } from "@interfaces";
import { getSecureStorage } from "@utils";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useAuthStore = create<AuthStoreState>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user: User) => set({ user }),
      authToken: null,
      setAuthToken: (authToken: string) => set({ authToken }),
      logout: () => set({ user: null, authToken: null }),
    }),
    {
      name: SECURE_STORAGE_KEYS.AUTH_TOKEN,
      storage: createJSONStorage(() => getSecureStorage()),
    }
  )
);

import { User } from "@commonTypes";

export interface SecureStorageInstance {
  setItem: (key: string, value: string) => Promise<void>;
  getItem: (key: string) => Promise<string | null>;
  removeItem: (key: string) => Promise<void>;
}

export interface AuthStoreState {
  user: User | null;
  setUser: (user: User) => void;
  authToken: string | null;
  setAuthToken: (authToken: string) => void;
  logout: () => void;
}

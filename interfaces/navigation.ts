import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Auth Stack
export type AuthStackParamList = {
  Welcome: undefined;
  Signin: undefined;
  UserTypeSelection: undefined;
  UserSignup: undefined;
  BrokerSignup: undefined;
};

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

// User Stack
export type UserStackParamList = {
  Home: undefined;
};

export type UserStackScreenProps<T extends keyof UserStackParamList> =
  NativeStackScreenProps<UserStackParamList, T>;

// Broker Stack
export type BrokerStackParamList = {
  Home: undefined;
};

export type BrokerStackScreenProps<T extends keyof BrokerStackParamList> =
  NativeStackScreenProps<BrokerStackParamList, T>;

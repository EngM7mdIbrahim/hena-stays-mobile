import { axiosApi } from "./base-api";
import { SignInRequest, SignInResponse } from "@interfaces/api/sign-in";

export const signIn = async (data: SignInRequest) => {
  const { data: response } = await axiosApi.post<SignInResponse>(
    "/auth/login",
    data
  );
  return response;
};

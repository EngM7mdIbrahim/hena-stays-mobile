import { ShowError } from "@interfaces";
import { Toast } from "react-native-toast-notifications";

export function getError(error: ShowError, showToast: boolean = true): string {
  let message: string = "";
  if (error.response) {
    if (error?.response?.data?.data?.[0]) {
      message =
        `${error?.response?.data?.data?.[0]?.path?.[0]} - ${error?.response?.data?.data?.[0]?.message}` ||
        `${error?.response?.data?.data?.[0]?.path?.[0]} - ${error?.response?.data?.data?.[0]?.msg} ` ||
        "Validation Error";
    } else if (error?.response?.data?.msg) {
      message = error?.response?.data?.msg;
    } else if (error?.response?.data?.message) {
      message = error?.response?.data?.message;
    } else if (error?.message) {
      message = error?.message;
    } else {
      message = "Unexpected error";
    }
  } else {
    const errorMessage =
      error?.data?.data?.[0]?.message ??
      error?.data?.data?.[0]?.msg ??
      error?.data?.msg ??
      error?.data?.message ??
      error?.message ??
      "Unexpected error";

    message = errorMessage;
  }

  // if (showToast) {
  //   Toast.show(message, {
  //     type: "danger",
  //     placement: "top",
  //     duration: 4000,
  //   });
  // }
  return message;
}

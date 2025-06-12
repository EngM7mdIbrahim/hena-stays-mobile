import React from "react";
import { TextInput, TextInputProps, I18nManager } from "react-native";
import { clsx } from "clsx";

export interface TextBoxProps extends TextInputProps {
  passedClassName?: string;
}

export const TextBox = ({ passedClassName = "", ...props }: TextBoxProps) => {
  return (
    <TextInput
      className={clsx(
        "flex w-full min-w-0 overflow-hidden rounded-xl text-[#121517] p-3 pb-4 text-base font-normal leading-normal bg-gray-200",
        passedClassName,
        I18nManager.isRTL ? "text-right" : "text-left"
      )}
      textAlign={I18nManager.isRTL ? "right" : "left"}
      {...props}
    />
  );
};

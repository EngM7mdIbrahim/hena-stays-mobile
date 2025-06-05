import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { clsx } from "clsx";

interface TextBoxProps extends TextInputProps {
  passedClassName?: string;
}

export const TextBox = ({ passedClassName = "", ...props }: TextBoxProps) => {
  return (
    <TextInput
      className={clsx(
        "flex w-full min-w-0 overflow-hidden rounded-xl text-[#121517] p-3 pb-4 text-base font-normal leading-normal bg-gray-200",
        passedClassName
      )}
      {...props}
    />
  );
};

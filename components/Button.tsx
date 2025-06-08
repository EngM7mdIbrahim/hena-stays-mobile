import clsx from "clsx";
import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  passedClassName?: string;
}

export const Button = ({
  onPress,
  disabled,
  variant = "primary",
  children,
  passedClassName = "",
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={clsx(
        "flex min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-full h-12 px-5 w-full",
        variant === "primary" ? "bg-primary" : "bg-secondary",
        passedClassName
      )}
      disabled={disabled}
    >
      <Text
        className={`text-base font-bold leading-normal tracking-wide truncate ${
          variant === "primary" ? "text-white" : "text-text"
        }`}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

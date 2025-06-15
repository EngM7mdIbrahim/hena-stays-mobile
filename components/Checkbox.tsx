import React from "react";
import { Pressable, Text, View } from "react-native";
import { clsx } from "clsx";
import Icon from "@expo/vector-icons/FontAwesome6";

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  passedClassName?: string;
}

export const Checkbox = ({
  checked,
  onChange,
  label = "",
  passedClassName = "",
}: CheckboxProps) => {
  return (
    <Pressable
      onPress={() => onChange(!checked)}
      className={clsx("flex-row items-center", passedClassName)}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
    >
      {checked ? (
        <Icon
          className="mr-2"
          iconStyle="solid"
          name="circle-check"
          size={18}
          color="#2563eb"
        />
      ) : (
        <View
          className={clsx(
            "w-5 h-5 rounded-full border border-gray-400 bg-white justify-center items-center mr-2"
          )}
        />
      )}
      {label ? <Text className="text-base text-gray-800">{label}</Text> : null}
    </Pressable>
  );
};

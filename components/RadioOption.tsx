import React from "react";
import { View, Text, Pressable } from "react-native";

interface RadioOptionProps {
  label: string;
  description: string;
  selected: boolean;
  onPress: () => void;
  passedClassName?: string;
}

export const RadioOption = ({
  label,
  description,
  selected,
  onPress,
  passedClassName = "",
}: RadioOptionProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-center gap-4 rounded-xl border border-solid border-[#dde1e3] p-[15px] mb-2 ${
        selected ? "border-primary" : ""
      } ${passedClassName}`}
      accessibilityRole="radio"
      accessibilityState={{ selected }}
    >
      <View
        className={`h-5 w-5 rounded-full border-2 border-[#dde1e3] items-center justify-center ${
          selected ? "border-primary" : ""
        }`}
        style={{ backgroundColor: selected ? "#5a95c8" : "transparent" }}
      >
        {selected && <View className="h-3 w-3 rounded-full bg-text" />}
      </View>
      <View className="flex-1">
        <Text className="text-text text-sm font-medium leading-normal">
          {label}
        </Text>
        <Text className="text-[#6a7681] text-sm font-normal leading-normal">
          {description}
        </Text>
      </View>
    </Pressable>
  );
};

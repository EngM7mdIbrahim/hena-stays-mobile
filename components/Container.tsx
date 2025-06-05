import clsx from "clsx";
import React from "react";
import { View } from "react-native";

interface ContainerProps {
  children: React.ReactNode;
  passedClassName?: string;
  fullScreen?: boolean;
}

export const Container = ({
  children,
  passedClassName = "",
  fullScreen = false,
}: ContainerProps) => {
  return (
    <View
      className={clsx(
        "flex flex-col px-4 pb-10 w-full",
        fullScreen && "flex-1",
        passedClassName
      )}
    >
      {children}
    </View>
  );
};

import clsx from "clsx";
import { I18nManager } from "react-native";
import { Text, TextProps } from "react-native";

export function AppText({ className, ...props }: TextProps) {
  return (
    <Text
      className={clsx(
        I18nManager.isRTL ? "text-right" : "text-left",
        className
      )}
      {...props}
    />
  );
}

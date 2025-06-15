import { AppText } from "@components/AppText";
import { PhoneNumberTextBox } from "@components/PhoneNumberTextBox";
import { TextBoxProps } from "@components/TextBox";
import clsx from "clsx";
import {
  Controller,
  ControllerProps,
  FieldValues,
  Path,
} from "react-hook-form";
import { Text, View } from "react-native";

export interface FormPhoneNumberTextboxProps<T extends FieldValues>
  extends Omit<TextBoxProps, "onChangeText" | "value"> {
  control: ControllerProps<T>["control"];
  name: Path<T>;
  errorMessage?: string;
  errorClassName?: string;
  passedClassName?: string;
  textBoxClassName?: string;
}

export function FormPhoneNumberTextbox<T extends FieldValues>({
  control,
  passedClassName,
  name,
  errorMessage,
  errorClassName,
  textBoxClassName,
  ...props
}: FormPhoneNumberTextboxProps<T>) {
  return (
    <View className={clsx("gap-1", passedClassName)}>
      <Controller<T>
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <PhoneNumberTextBox
            passedClassName={textBoxClassName}
            value={value}
            onChangeText={onChange}
            {...props}
          />
        )}
      />
      {errorMessage && (
        <AppText className={clsx("text-red-500 text-sm", errorClassName)}>
          {errorMessage}
        </AppText>
      )}
    </View>
  );
}

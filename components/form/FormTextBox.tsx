import { AppText } from "@components/AppText";
import { TextBox, TextBoxProps } from "@components/TextBox";
import clsx from "clsx";
import {
  Controller,
  ControllerProps,
  FieldValues,
  Path,
} from "react-hook-form";
import { Text, View } from "react-native";

export interface FormTextBoxProps<T extends FieldValues> extends TextBoxProps {
  control: ControllerProps<T>["control"];
  textBoxClassName?: string;
  errorMessage?: string;
  errorClassName?: string;
  name: Path<T>;
}

export function FormTextBox<T extends FieldValues>({
  control,
  passedClassName,
  name,
  errorMessage,
  errorClassName,
  textBoxClassName,
  ...props
}: FormTextBoxProps<T>) {
  return (
    <View className={clsx("gap-1", passedClassName)}>
      <Controller<T>
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <TextBox
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

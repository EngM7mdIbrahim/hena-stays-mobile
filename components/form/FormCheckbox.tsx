import { AppText } from "@components/AppText";
import { Checkbox, CheckboxProps } from "@components/Checkbox";
import clsx from "clsx";
import {
  Controller,
  ControllerProps,
  FieldValues,
  Path,
} from "react-hook-form";
import { View } from "react-native";

export interface FormCheckboxProps<T extends FieldValues>
  extends Omit<CheckboxProps, "checked" | "onChange"> {
  control: ControllerProps<T>["control"];
  passedClassName?: string;
  errorMessage?: string;
  errorClassName?: string;
  name: Path<T>;
}

export function FormCheckbox<T extends FieldValues>({
  control,
  passedClassName,
  name,
  errorMessage,
  errorClassName,
  ...props
}: FormCheckboxProps<T>) {
  return (
    <View className={clsx("gap-1", passedClassName)}>
      <Controller<T>
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Checkbox
            passedClassName={passedClassName}
            checked={value ?? false}
            onChange={(checked) => onChange(checked)}
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

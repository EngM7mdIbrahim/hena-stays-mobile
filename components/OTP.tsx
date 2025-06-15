import React, { useRef, useState, useEffect, useCallback } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { clsx } from "clsx";
import { useCountDown } from "@hooks";

export interface OTPProps {
  value: string;
  onChange: (value: string) => void;
  numberOfDigits?: number;
  passedClassName?: string;
  onResend: () => void;
  emailText?: string;
  initialResendTimeout?: number; // in seconds
  isPending?: boolean;
}

export const OTP = ({
  value,
  onChange,
  numberOfDigits = 4,
  passedClassName = "",
  onResend,
  emailText,
  initialResendTimeout = 60,
  isPending = false,
}: OTPProps) => {
  const inputs = useRef<(TextInput | null)[]>([]);
  const { counter, reset } = useCountDown(initialResendTimeout, 30, 5);

  const handleResend = useCallback(() => {
    if (counter === 0 && !isPending) {
      onResend();
      reset();
    }
  }, [counter, onResend, reset, isPending]);

  const handleChange = (text: string, idx: number) => {
    let newValue = value.split("");
    if (/^\d$/.test(text)) {
      newValue[idx] = text;
      const joined = newValue.join("").slice(0, numberOfDigits);
      onChange(joined);
      // Move to next input
      if (text && idx < numberOfDigits - 1) {
        inputs.current[idx + 1]?.focus();
      }
    } else if (text === "") {
      newValue[idx] = "";
      onChange(newValue.join("").slice(0, numberOfDigits));
    }
  };

  const handleKeyPress = (e: any, idx: number) => {
    if (e.nativeEvent.key === "Backspace" && !value[idx] && idx > 0) {
      inputs.current[idx - 1]?.focus();
    }
  };

  return (
    <View className={clsx("items-center", passedClassName)}>
      <View className="flex-row gap-2 justify-center mb-4">
        {Array.from({ length: numberOfDigits }).map((_, idx) => (
          <TextInput
            key={idx}
            ref={(ref) => {
              inputs.current[idx] = ref;
            }}
            className={clsx(
              "w-12 h-14 text-center text-xl rounded-xl bg-gray-200 text-[#121517] font-bold border border-gray-300",
              value[idx] ? "border-blue-500" : "border-gray-300"
            )}
            keyboardType="number-pad"
            maxLength={1}
            value={value[idx] || ""}
            onChangeText={(text) => handleChange(text, idx)}
            onKeyPress={(e) => handleKeyPress(e, idx)}
            autoFocus={idx === 0}
          />
        ))}
      </View>
      {emailText && (
        <Text className="text-base text-center text-gray-700 mb-2">
          {emailText}
        </Text>
      )}
      <TouchableOpacity
        onPress={handleResend}
        disabled={counter > 0 || isPending}
        className={clsx(
          "mt-2 px-4 py-2 rounded-lg",
          counter > 0 || isPending ? "bg-gray-300" : "bg-blue-600"
        )}
      >
        <Text
          className={clsx(
            "text-base font-semibold",
            counter > 0 ? "text-gray-500" : "text-white"
          )}
        >
          {counter > 0 ? `Resend OTP in ${counter}s` : "Resend OTP"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

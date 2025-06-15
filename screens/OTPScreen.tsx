import { AuthStackScreenProps } from "@interfaces";
import Screen from "@components/Screen";
import { AppText } from "@components/AppText";
import { ImageBackground, View } from "react-native";
import { appNotifications, getTranslation } from "@utils";
import { FormTextBox } from "@components/form";
import { Container } from "@components/Container";
import { OTP } from "@components/OTP";
import { useEffect, useState } from "react";
import { useSendOTP, useVerifyOTP } from "@hooks";
import { useAuthStore } from "@store";

export const OTPScreen = ({ route }: AuthStackScreenProps<"OTP">) => {
  const [otp, setOtp] = useState("");
  const { email } = route.params;
  const { setAuthToken } = useAuthStore();
  const { mutate: sendOTP, isPending: isSendingOTP } = useSendOTP({
    onSuccess: () => {
      appNotifications.success("OTP sent successfully");
    },
  });

  const { mutate: verifyOTP, isPending: isVerifyingOTP } = useVerifyOTP({
    onSuccess: ({ token }) => {
      appNotifications.success("OTP verified successfully");
      setAuthToken(token);
    },
  });

  useEffect(() => {
    if (otp.length === 4 && !isVerifyingOTP && !isSendingOTP) {
      verifyOTP({
        otp: otp,
        email: email,
      });
    }
  }, [otp]);

  return (
    <Screen>
      <ImageBackground
        source={require("@assets/welcome-hero.png")}
        className="w-full h-64"
        resizeMode="cover"
      />
      <Container passedClassName="flex-col gap-3 mt-3" fullScreen>
        <AppText className="text-text text-title font-bold leading-tight tracking-tight text-start">
          {getTranslation("screens.otp.otpForm.otp")}
        </AppText>

        <View className="flex flex-col gap-2 pb-2">
          <OTP
            value={otp}
            onChange={setOtp}
            numberOfDigits={4}
            emailText={getTranslation("screens.otp.otpForm.email", {
              email: email,
            })}
            isPending={isVerifyingOTP || isSendingOTP}
            onResend={() => {
              sendOTP({
                email: email,
              });
            }}
          />
        </View>
      </Container>
    </Screen>
  );
};

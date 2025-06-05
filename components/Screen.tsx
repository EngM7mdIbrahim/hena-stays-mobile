import { PropsWithChildren, useMemo } from "react";
import { Platform, ScrollView, KeyboardAvoidingView, View } from "react-native";
import { Container } from "./Container";
import clsx from "clsx";
import { SafeAreaView } from "react-native-safe-area-context";

export interface ScreenProps extends PropsWithChildren {
  withFullScreenContainer?: boolean;
  withContainer?: boolean;
  withSafeAreaView?: boolean;
  containerClassName?: string;
  scrollViewClassName?: string;
  keyboardAvoidingViewClassName?: string;
  safeAreaViewClassName?: string;
}

export default function Screen({
  children,
  withFullScreenContainer,
  withContainer,
  withSafeAreaView,
  containerClassName,
  scrollViewClassName,
  keyboardAvoidingViewClassName,
  safeAreaViewClassName,
}: ScreenProps) {
  const childrenComponent = useMemo(() => {
    return (
      <ScrollView
        className={clsx("", scrollViewClassName)}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        {withFullScreenContainer ? (
          <Container
            fullScreen
            passedClassName={clsx("", containerClassName)}
          >
            {children}
          </Container>
        ) : withContainer ? (
          <Container passedClassName={clsx("", containerClassName)}>
            {children}
          </Container>
        ) : (
          <View className={clsx("flex-1", containerClassName)}>
            {children}
          </View>
        )}
      </ScrollView>
    );
  }, [
    children,
    withFullScreenContainer,
    withContainer,
    containerClassName,
    scrollViewClassName,
  ]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100} 
      className={clsx("flex-1 bg-white", keyboardAvoidingViewClassName)}
    >
      {withSafeAreaView ? (
        <SafeAreaView className={clsx("flex-1", safeAreaViewClassName)}>
          {childrenComponent}
        </SafeAreaView>
      ) : (
        childrenComponent
      )}
    </KeyboardAvoidingView>
  );
}

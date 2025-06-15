import { AppText } from "@components/AppText";
import Screen from "@components/Screen";
import { Button } from "@components/Button";
import { useAuthStore } from "@store";

export const ProfileScreen = () => {
  const { user, logout } = useAuthStore();
  return (
    <Screen>
      <AppText>{user?.name}</AppText>
      <AppText>{user?.email}</AppText>
      <AppText>{user?.phone}</AppText>
      <AppText>{user?.role}</AppText>
      <Button onPress={logout}>Logout</Button>
    </Screen>
  );
};

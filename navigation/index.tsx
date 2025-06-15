import { useAuthStore } from "@store";
import { useCallback, useMemo, useEffect } from "react";
import { AuthNavigation } from "./AuthNavigation";
import { UserRole, UserRoleType } from "@commonTypes";
import { appNotifications, getTranslation } from "@utils";
import { UserNavigation } from "./UserNavigation";
import { BrokerNavigation } from "./BrokerNavigation";

export function NavigationManager() {
  const { user, authToken, logout } = useAuthStore();

  useEffect(() => {
    if (
      user &&
      !([UserRole.User, UserRole.Broker] as UserRoleType[]).includes(user.role)
    ) {
      appNotifications.warning(getTranslation("errorMessages.unsupportedUser"));
      logout();
    }
  }, [user, logout]);

  const CurrentNavigation = useMemo(() => {
    if (!user || !authToken) {
      return AuthNavigation;
    }
    switch (user.role) {
      case UserRole.User:
        return UserNavigation;
      case UserRole.Broker:
        return BrokerNavigation;
      default:
        return AuthNavigation;
    }
  }, [user, authToken]);

  return <CurrentNavigation />;
}

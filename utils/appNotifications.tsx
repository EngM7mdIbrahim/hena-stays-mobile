import { NOTIFICATION_CONFIG } from "@constants";
import { NotificationStatus } from "@enums";
import Icon from "@expo/vector-icons/FontAwesome6";
import { Notification } from "@interfaces";
import uuid from "react-native-uuid";
import { Toast, ToastOptions } from "react-native-toast-notifications";

const colorMap: Record<NotificationStatus, ToastOptions["type"]> = {
  [NotificationStatus.SUCCESS]: "success",
  [NotificationStatus.ERROR]: "danger",
  [NotificationStatus.WARNING]: "warning",
  [NotificationStatus.INFO]: "info",
  [NotificationStatus.LOADING]: "info",
};

const iconsMap = {
  [NotificationStatus.SUCCESS]: (
    <Icon iconStyle="solid" name="circle-check" size={20} color="white" />
  ),
  [NotificationStatus.ERROR]: (
    <Icon iconStyle="solid" name="triangle-exclamation" size={20} color="white" />
  ),
  [NotificationStatus.WARNING]: (
    <Icon iconStyle="solid" name="triangle-exclamation" size={20} color="white" />
  ),
  [NotificationStatus.INFO]: (
    <Icon iconStyle="solid"  name="circle-info" size={20} color="white" />
  ),
  [NotificationStatus.LOADING]: (
    <Icon iconStyle="solid" name="spinner" size={20} color="#3b82f6" />
  ),
};

function getNotificationData(
  notificationOrMessage: Omit<Notification, "status"> | string,
  type: NotificationStatus
): ToastOptions & { message: string } {
  return typeof notificationOrMessage === "string"
    ? { message: notificationOrMessage, type }
    : { ...notificationOrMessage, type };
}

function showNotification(
  notificationOrMessage: Omit<Notification, "status"> | string,
  type: NotificationStatus
) {
  const notificationId = uuid.v4();
  const { message, ...toastOptions } = getNotificationData(
    notificationOrMessage,
    type
  );
  Toast.show(message, {
    ...NOTIFICATION_CONFIG,
    ...toastOptions,
    onPress: () => {
      toastOptions?.onPress?.(notificationId);
    },
    id: notificationId,
    icon: iconsMap[type],
  });
  return notificationId;
}

function success(notificationOrMessage: Omit<Notification, "status"> | string) {
  return showNotification(notificationOrMessage, NotificationStatus.SUCCESS);
}

function error(notificationOrMessage: Omit<Notification, "status"> | string) {
  return showNotification(notificationOrMessage, NotificationStatus.ERROR);
}

function warning(notificationOrMessage: Omit<Notification, "status"> | string) {
  return showNotification(notificationOrMessage, NotificationStatus.WARNING);
}

function info(notificationOrMessage: Omit<Notification, "status"> | string) {
  return showNotification(notificationOrMessage, NotificationStatus.INFO);
}

async function promise(
  promiseOrCallback: Promise<any> | (() => Promise<any>),
  options: {
    loading: Omit<Notification, "status"> | string;
    success: Omit<Notification, "status"> | string;
    error: Omit<Notification, "status"> | string;
  }
) {
  const notificationId = showNotification(
    options.loading,
    NotificationStatus.INFO
  );
  try {
    const result = await promiseOrCallback;
    Toast.update(notificationId, {
      ...getNotificationData(options.success, NotificationStatus.SUCCESS),
      id: notificationId,
    });
    return result;
  } catch (caughtError) {
    Toast.update(notificationId, {
      ...getNotificationData(options.error, NotificationStatus.ERROR),
      id: notificationId,
    });
    return notificationId;
  }
}

export const appNotifications = {
  success,
  error,
  warning,
  info,
  promise,
};

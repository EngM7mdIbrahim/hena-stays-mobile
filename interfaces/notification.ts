import { NotificationStatus } from '@enums'

export interface Notification {
  onPress?: () => void
  message: string
  status: NotificationStatus
}

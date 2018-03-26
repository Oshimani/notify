import { NotificationLevel } from './notification.level';

export interface INotification {
    level: NotificationLevel;
    heading: string;
    message: string;
    timeout: number;
    dismissable: boolean;
}

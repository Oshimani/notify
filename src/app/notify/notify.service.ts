import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { INotification } from './notification.interface';

@Injectable()
export class NotifyService {
    public static notificationSource: Subject<INotification> = new Subject<INotification>();
    public static notification: Observable<INotification> = NotifyService.notificationSource.asObservable();

    public static newNotification(notification: INotification) {
        NotifyService.notificationSource.next(notification);
    }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private _notification = new BehaviorSubject<{ message: string; type: string } | null>(
    null
  );
  notification$ = this._notification.asObservable();
  duration = 2000; // Default duration

  setNotification(message: string, type: string) {
    this._notification.next({ message, type });
  }

  clearNotification() {
    this._notification.next(null);
  }
}

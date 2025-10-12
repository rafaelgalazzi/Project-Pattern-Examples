import { Order } from './Order';

export interface INotifyEmail {
  notify(order: Order): void;
}

export class NotifyEmail implements INotifyEmail {
  notify(order: Order) {
    console.log('Notifying email.', order.id);
  }
}

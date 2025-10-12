import { Order } from './Order';

export interface IProcessPayment {
  process(order: Order): void;
}

export class ProcessPayment implements IProcessPayment {
  process(order: Order) {
    console.log('Processing payment.', order.id);
  }
}

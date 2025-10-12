import { Order } from './Order';

export interface IRegisterOrderToSend {
  register(order: Order): void;
}

export class RegisterOrderToSend {
  register(order: Order) {
    console.log('Registering order', order.id);
  }
}

import { Order } from './Order';

export interface IGerenateInvoice {
  generate(order: Order): void;
}

export class GenerateInvoice implements IGerenateInvoice {
  generate(order: Order) {
    console.log('Generating invoice.', order.id);
  }
}

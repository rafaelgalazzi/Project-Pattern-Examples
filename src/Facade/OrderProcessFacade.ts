import { GenerateInvoice } from './GenerateInvoice';
import { NotifyEmail } from './NotifyEmail';
import { Order } from './Order';
import { ProcessPayment } from './ProcessPayment';
import { RegisterOrderToSend } from './RegisterOrderToSend';

export class OrderProcessFacade {
  private processPayment: ProcessPayment;
  private generateInvoice: GenerateInvoice;
  private registerOrderToSend: RegisterOrderToSend;
  private notifyEmail: NotifyEmail;

  constructor(
    processPayment: ProcessPayment,
    generateInvoice: GenerateInvoice,
    registerOrderToSend: RegisterOrderToSend,
    notifyEmail: NotifyEmail
  ) {
    this.processPayment = processPayment;
    this.generateInvoice = generateInvoice;
    this.registerOrderToSend = registerOrderToSend;
    this.notifyEmail = notifyEmail;
  }

  execute(order: Order) {
    this.processPayment.process(order);
    this.generateInvoice.generate(order);
    this.registerOrderToSend.register(order);
    this.notifyEmail.notify(order);
  }
}

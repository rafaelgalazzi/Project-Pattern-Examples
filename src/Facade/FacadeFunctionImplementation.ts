import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { ProcessPayment } from './ProcessPayment';
import { GenerateInvoice } from './GenerateInvoice';
import { NotifyEmail } from './NotifyEmail';
import { RegisterOrderToSend } from './RegisterOrderToSend';
import { Order } from './Order';
import { OrderProcessFacade } from './OrderProcessFacade';

export const facadePatternFunction = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log(event.queryStringParameters);

  // Normal implementation of making all in the controller here
  console.log('Sem facade');
  const order = new Order();
  const processPayment = new ProcessPayment();
  const generateInvoice = new GenerateInvoice();
  const registerOrderToSend = new RegisterOrderToSend();
  const notifyEmail = new NotifyEmail();

  processPayment.process(order);
  generateInvoice.generate(order);
  registerOrderToSend.register(order);
  notifyEmail.notify(order);

  // Using a facade
  console.log('Com facade');
  const orderProcessFacade = new OrderProcessFacade(processPayment, generateInvoice, registerOrderToSend, notifyEmail);
  orderProcessFacade.execute(order);

  return {
    statusCode: 200,
    body: `Notification`,
  };
};

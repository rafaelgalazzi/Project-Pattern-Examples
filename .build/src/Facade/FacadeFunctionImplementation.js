"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facadePatternFunction = void 0;
const ProcessPayment_1 = require("./ProcessPayment");
const GenerateInvoice_1 = require("./GenerateInvoice");
const NotifyEmail_1 = require("./NotifyEmail");
const RegisterOrderToSend_1 = require("./RegisterOrderToSend");
const Order_1 = require("./Order");
const OrderProcessFacade_1 = require("./OrderProcessFacade");
const facadePatternFunction = async (event, context) => {
    console.log(event.queryStringParameters);
    // Normal implementation of making all in the controller here
    console.log('Sem facade');
    const order = new Order_1.Order();
    const processPayment = new ProcessPayment_1.ProcessPayment();
    const generateInvoice = new GenerateInvoice_1.GenerateInvoice();
    const registerOrderToSend = new RegisterOrderToSend_1.RegisterOrderToSend();
    const notifyEmail = new NotifyEmail_1.NotifyEmail();
    processPayment.process(order);
    generateInvoice.generate(order);
    registerOrderToSend.register(order);
    notifyEmail.notify(order);
    // Using a facade
    console.log('Com facade');
    const orderProcessFacade = new OrderProcessFacade_1.OrderProcessFacade(processPayment, generateInvoice, registerOrderToSend, notifyEmail);
    orderProcessFacade.execute(order);
    return {
        statusCode: 200,
        body: `Notification`,
    };
};
exports.facadePatternFunction = facadePatternFunction;

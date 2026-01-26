"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProcessFacade = void 0;
class OrderProcessFacade {
    constructor(processPayment, generateInvoice, registerOrderToSend, notifyEmail) {
        this.processPayment = processPayment;
        this.generateInvoice = generateInvoice;
        this.registerOrderToSend = registerOrderToSend;
        this.notifyEmail = notifyEmail;
    }
    execute(order) {
        this.processPayment.process(order);
        this.generateInvoice.generate(order);
        this.registerOrderToSend.register(order);
        this.notifyEmail.notify(order);
    }
}
exports.OrderProcessFacade = OrderProcessFacade;

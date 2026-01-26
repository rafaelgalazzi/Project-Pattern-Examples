"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessPayment = void 0;
class ProcessPayment {
    process(order) {
        console.log('Processing payment.', order.id);
    }
}
exports.ProcessPayment = ProcessPayment;

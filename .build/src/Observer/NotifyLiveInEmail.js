"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifyLiveInEmail = void 0;
const EventSubscriberTemplate_1 = require("./EventSubscriberTemplate");
class NotifyLiveInEmail extends EventSubscriberTemplate_1.EventSubscriberTemplate {
    update() {
        console.log('Notify in email!');
    }
}
exports.NotifyLiveInEmail = NotifyLiveInEmail;

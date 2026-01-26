"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifyLiveInDiscord = void 0;
const EventSubscriberTemplate_1 = require("./EventSubscriberTemplate");
class NotifyLiveInDiscord extends EventSubscriberTemplate_1.EventSubscriberTemplate {
    update() {
        console.log('Notify in discord!');
    }
}
exports.NotifyLiveInDiscord = NotifyLiveInDiscord;

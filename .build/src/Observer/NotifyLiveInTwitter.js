"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifyLiveInTwitter = void 0;
const EventSubscriberTemplate_1 = require("./EventSubscriberTemplate");
class NotifyLiveInTwitter extends EventSubscriberTemplate_1.EventSubscriberTemplate {
    update() {
        console.log('Notify in twitter!');
    }
}
exports.NotifyLiveInTwitter = NotifyLiveInTwitter;

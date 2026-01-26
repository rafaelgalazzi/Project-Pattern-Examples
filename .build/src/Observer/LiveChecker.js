"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveChecker = void 0;
const EventPublisherTemplate_1 = require("./EventPublisherTemplate");
class LiveChecker extends EventPublisherTemplate_1.EventPublisherTemplate {
    constructor() {
        super();
        this.subscribers = [];
    }
    getIfIsInLive() {
        return Math.random() < 0.5;
    }
    verifyLive() {
        const isInLive = this.getIfIsInLive();
        console.log('Is in Live: ', isInLive);
        if (isInLive) {
            this.notify();
        }
    }
    subscribe(subscribe) {
        if (!this.subscribers.includes(subscribe))
            this.subscribers.push(subscribe);
    }
    unsubscribe(subscribe) {
        this.subscribers = this.subscribers.filter((item) => item !== subscribe);
    }
    notify() {
        for (let item of this.subscribers) {
            item.update();
        }
    }
}
exports.LiveChecker = LiveChecker;

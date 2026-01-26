"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.observerPatternFunction = void 0;
const LiveChecker_1 = require("./LiveChecker");
const NotifyLiveInDiscord_1 = require("./NotifyLiveInDiscord");
const NotifyLiveInEmail_1 = require("./NotifyLiveInEmail");
const NotifyLiveInTwitter_1 = require("./NotifyLiveInTwitter");
const observerPatternFunction = async (event, context) => {
    console.log(event.queryStringParameters);
    const liveChecker = new LiveChecker_1.LiveChecker();
    const notifyDiscord = new NotifyLiveInDiscord_1.NotifyLiveInDiscord();
    const notifyEmail = new NotifyLiveInEmail_1.NotifyLiveInEmail();
    const notifyTwitter = new NotifyLiveInTwitter_1.NotifyLiveInTwitter();
    liveChecker.subscribe(notifyDiscord);
    liveChecker.subscribe(notifyEmail);
    liveChecker.subscribe(notifyTwitter);
    liveChecker.verifyLive();
    return {
        statusCode: 200,
        body: `Notification`,
    };
};
exports.observerPatternFunction = observerPatternFunction;

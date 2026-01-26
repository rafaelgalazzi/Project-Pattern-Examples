"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicTextProcessor = void 0;
const TextProcessor_1 = require("./TextProcessor");
class BasicTextProcessor extends TextProcessor_1.TextProcessor {
    constructor(processorRule) {
        super();
        this.processorRule = processorRule;
    }
    process(text) {
        return text.replace(this.processorRule, '');
    }
}
exports.BasicTextProcessor = BasicTextProcessor;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddSignatureProcessor = void 0;
const TextProcessor_1 = require("./TextProcessor");
class AddSignatureProcessor extends TextProcessor_1.TextProcessor {
    constructor(textProcessor, processorRule) {
        super();
        this.textProcessor = textProcessor;
        this.processorRule = processorRule;
    }
    process(text) {
        const firstProcessment = this.textProcessor.process(text);
        return firstProcessment.concat(this.processorRule);
    }
}
exports.AddSignatureProcessor = AddSignatureProcessor;

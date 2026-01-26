"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decoratorPatternFunction = void 0;
const BasicTextProcessor_1 = require("./BasicTextProcessor");
const AddSignatureProcessor_1 = require("./AddSignatureProcessor");
// Decorator Pattern using recursive composition to add new features to existent code, without changing the existent code.
const decoratorPatternFunction = async (event, context) => {
    let textProcessor = new BasicTextProcessor_1.BasicTextProcessor('T');
    textProcessor = new AddSignatureProcessor_1.AddSignatureProcessor(textProcessor, ' Signature');
    const processedText = textProcessor.process('TEXT EXAMPLE');
    return {
        statusCode: 200,
        body: `Text processed: ${processedText}`,
    };
};
exports.decoratorPatternFunction = decoratorPatternFunction;

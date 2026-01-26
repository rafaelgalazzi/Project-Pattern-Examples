"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
function errorHandler(handler) {
    return async function (event, context) {
        try {
            return await handler(event, context);
        }
        catch (e) {
            console.error('Lambda error:', e);
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: e instanceof Error ? e.message : 'Internal Server Error',
                }),
            };
        }
    };
}

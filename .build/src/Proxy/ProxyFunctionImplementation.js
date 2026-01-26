"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyPatternFunction = void 0;
const BaseGetFile_1 = require("./BaseGetFile");
const BaseGetFileProxy_1 = require("./BaseGetFileProxy");
const CacheHandler_1 = require("../commom/CacheHandler");
// Proxy pattern we inject the main class inside a proxy class where we can make additional logic without changing the original code
const proxyPatternFunction = async (event, context) => {
    console.log(event.queryStringParameters);
    const cacheHandler = new CacheHandler_1.CacheHandler();
    const getFileHandler = new BaseGetFile_1.BaseGetFile();
    const getFileHandlerProxy = new BaseGetFileProxy_1.BaseGetFileProxy(getFileHandler, cacheHandler);
    const fileName = event.queryStringParameters?.name;
    if (!fileName) {
        throw Error('Property name is required.');
    }
    const getFileFromDatabase = getFileHandlerProxy.get(fileName);
    if (getFileFromDatabase instanceof Error)
        throw getFileFromDatabase;
    return {
        statusCode: 200,
        body: `Found Item: ${getFileFromDatabase.name} Content: ${getFileFromDatabase.content}`,
    };
};
exports.proxyPatternFunction = proxyPatternFunction;

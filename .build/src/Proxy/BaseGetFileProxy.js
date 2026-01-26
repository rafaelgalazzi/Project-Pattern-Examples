"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseGetFileProxy = void 0;
const GetFileTemplate_1 = require("./GetFileTemplate");
class BaseGetFileProxy extends GetFileTemplate_1.GetFileTemplate {
    constructor(baseGetFile, cacheHandler) {
        super();
        this.baseGetFile = baseGetFile;
        this.cacheHandler = cacheHandler;
    }
    get(fileName) {
        console.log('Executing additional logic!');
        const file = this.cacheHandler.get(fileName);
        if (file)
            return file;
        const findFileFromDatabase = this.baseGetFile.get(fileName);
        if (findFileFromDatabase instanceof Error)
            throw findFileFromDatabase;
        this.cacheHandler.set(fileName, findFileFromDatabase);
        return findFileFromDatabase;
    }
}
exports.BaseGetFileProxy = BaseGetFileProxy;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseGetFile = void 0;
const GetFileTemplate_1 = require("./GetFileTemplate");
class BaseGetFile extends GetFileTemplate_1.GetFileTemplate {
    constructor() {
        super();
        this.fileDatabase = [
            {
                name: 'Text1',
                content: 'sdasdasd45126431625341261adsd151243156241c1a5s6fghfsAFASF!@$$@$!@$!@$!@',
            },
            { name: 'Test', content: 'ASDFAS21312fsdfsd#@$!@%$!dasdfaf451234' },
        ];
    }
    get(fileName) {
        const foundFile = this.simulateDataBaseConnection(fileName);
        if (!foundFile)
            throw Error(`File not found: ${fileName}`);
        return foundFile;
    }
    simulateDataBaseConnection(fileName) {
        const start = Date.now();
        while (Date.now() - start < 4000) { }
        return this.fileDatabase.find((item) => item.name === fileName);
    }
}
exports.BaseGetFile = BaseGetFile;

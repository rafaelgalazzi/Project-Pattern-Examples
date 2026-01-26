"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singletonPatternFunction = void 0;
const DatabaseConnection_1 = require("./DatabaseConnection");
const singletonPatternFunction = async (event, context) => {
    const database = {
        read: (form) => form,
        write: (form) => form,
    };
    const databaseInstance = DatabaseConnection_1.DatabaseConnection.getInstance('www.example.com', database);
    const read1 = databaseInstance.read({ name: 'Test 1' });
    const databaseInstance2 = DatabaseConnection_1.DatabaseConnection.getInstance('www.example.com', database);
    const read2 = databaseInstance2.read({ name: 'Test 2' });
    return {
        statusCode: 200,
        body: `Read result: ${read1.name} ${read2.name}`,
    };
};
exports.singletonPatternFunction = singletonPatternFunction;

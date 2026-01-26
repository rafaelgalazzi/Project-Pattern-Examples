"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnection = void 0;
const DatabaseConnectionTemplate_1 = require("./DatabaseConnectionTemplate");
class DatabaseConnection extends DatabaseConnectionTemplate_1.DatabaseConnectionTemplate {
    // 1. Private constructor
    constructor(url, database) {
        super();
        this.isConnected = false;
        this.url = url;
        this.dbInstance = database;
    }
    // 2. Singleton accessor
    static getInstance(url, database) {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection(url, database);
        }
        return DatabaseConnection.instance;
    }
    // 3. Connection logic
    async connect() {
        if (this.isConnected) {
            return;
        }
        // Example connection logic
        console.log(`Connecting to database at ${this.url}...`);
        // await some async driver connection here
        this.isConnected = true;
        console.log('Database connected');
    }
    // Optional convenience methods
    read(form) {
        return this.dbInstance.read(form);
    }
    write(form) {
        return this.dbInstance.write(form);
    }
}
exports.DatabaseConnection = DatabaseConnection;
DatabaseConnection.instance = null;

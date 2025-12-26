import { Database, DatabaseConnectionTemplate } from './DatabaseConnectionTemplate';

export class DatabaseConnection extends DatabaseConnectionTemplate {
  private static instance: DatabaseConnection | null = null;

  protected url: string;
  protected dbInstance: Database;
  private isConnected = false;

  // 1. Private constructor
  private constructor(url: string, database: Database) {
    super();
    this.url = url;
    this.dbInstance = database;
  }

  // 2. Singleton accessor
  public static getInstance(url: string, database: Database): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection(url, database);
    }

    return DatabaseConnection.instance;
  }

  // 3. Connection logic
  async connect(): Promise<void> {
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
  read<T>(form: T): T {
    return this.dbInstance.read<T>(form);
  }

  write<T>(form: T): T | null {
    return this.dbInstance.write<T>(form);
  }
}

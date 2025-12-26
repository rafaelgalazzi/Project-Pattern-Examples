export interface Database {
  read: <T>(form: T) => T;
  write: <T>(form: T) => T | null;
}

export abstract class DatabaseConnectionTemplate {
  protected abstract url: string;
  protected abstract dbInstance: Database;

  abstract connect(): void;
}

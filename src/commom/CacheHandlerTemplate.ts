export interface CacheDatabaseItem {
  key: string;
  value: unknown;
  createAt: number;
}

export abstract class CacheHandlerTemplate {
  protected abstract cacheDatabase: CacheDatabaseItem[];
  protected abstract expirationTimeInMilliseconds: number;
  protected abstract maxItems: number;

  abstract get<T>(key: string): T | null;

  abstract set<T>(key: string, value: T): void;

  abstract invalidate(key: string): void;
}

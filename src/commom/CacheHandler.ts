import { CacheDatabaseItem, CacheHandlerTemplate } from './CacheHandlerTemplate';

// Implemented just to simulate a cache interface

export class CacheHandler extends CacheHandlerTemplate {
  protected cacheDatabase: CacheDatabaseItem[] = [];
  protected expirationTimeInMilliseconds: number;
  protected maxItems: number;
  constructor(expirationTimeInMilliseconds?: number, maxItems?: number) {
    super();
    this.expirationTimeInMilliseconds = expirationTimeInMilliseconds || 1000 * 60 * 60 * 2; // 2 horas
    this.maxItems = maxItems || 1000;
    this.verifyInvalidCaches();
  }

  get<T>(key: string): T | null {
    const findItem = this.cacheDatabase.find((item) => item.key === key);
    if (!findItem) return null;
    if (findItem.createAt <= Date.now() - this.expirationTimeInMilliseconds) {
      this.invalidate(key);
      return null;
    }
    return findItem.value as T;
  }

  set<T>(key: string, value: T): void {
    const alreadyHastheKey = this.get(key);

    if (alreadyHastheKey) {
      this.cacheDatabase = this.cacheDatabase.map((item) => {
        if (item.key === key)
          return {
            key,
            value,
            createAt: Date.now(),
          };
        return item;
      });
      return;
    }

    this.cacheDatabase = [...this.cacheDatabase, { key, value, createAt: Date.now() }];

    if (this.cacheDatabase.length > this.maxItems) this.cacheDatabase = this.cacheDatabase.slice(-this.maxItems);
  }

  invalidate(key: string): void {
    this.cacheDatabase = this.cacheDatabase.filter((item) => item.key !== key);
  }

  verifyInvalidCaches() {
    setInterval(() => {
      const now = Date.now();
      this.cacheDatabase = this.cacheDatabase.filter((item) => item.createAt > now - this.expirationTimeInMilliseconds);
    }, 10000);
  }
}

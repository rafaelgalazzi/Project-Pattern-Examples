"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheHandler = void 0;
const CacheHandlerTemplate_1 = require("./CacheHandlerTemplate");
// Implemented just to simulate a cache interface
class CacheHandler extends CacheHandlerTemplate_1.CacheHandlerTemplate {
    constructor(expirationTimeInMilliseconds, maxItems) {
        super();
        this.cacheDatabase = [];
        this.expirationTimeInMilliseconds = expirationTimeInMilliseconds || 1000 * 60 * 60 * 2; // 2 horas
        this.maxItems = maxItems || 1000;
        this.verifyInvalidCaches();
    }
    get(key) {
        const findItem = this.cacheDatabase.find((item) => item.key === key);
        if (!findItem)
            return null;
        if (findItem.createAt <= Date.now() - this.expirationTimeInMilliseconds) {
            this.invalidate(key);
            return null;
        }
        return findItem.value;
    }
    set(key, value) {
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
        if (this.cacheDatabase.length > this.maxItems)
            this.cacheDatabase = this.cacheDatabase.slice(-this.maxItems);
    }
    invalidate(key) {
        this.cacheDatabase = this.cacheDatabase.filter((item) => item.key !== key);
    }
    verifyInvalidCaches() {
        setInterval(() => {
            const now = Date.now();
            this.cacheDatabase = this.cacheDatabase.filter((item) => item.createAt > now - this.expirationTimeInMilliseconds);
        }, 10000);
    }
}
exports.CacheHandler = CacheHandler;

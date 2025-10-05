import { CacheHandler } from '../commom/CacheHandler';
import { BaseGetFile } from './BaseGetFile';
import { FileExample, GetFileTemplate } from './GetFileTemplate';

export class BaseGetFileProxy extends GetFileTemplate {
  private baseGetFile: BaseGetFile;
  private cacheHandler: CacheHandler;
  constructor(baseGetFile: BaseGetFile, cacheHandler: CacheHandler) {
    super();
    this.baseGetFile = baseGetFile;
    this.cacheHandler = cacheHandler;
  }

  get(fileName: string): FileExample | Error {
    console.log('Executing additional logic!');
    const file = this.cacheHandler.get<FileExample>(fileName);

    if (file) return file;

    const findFileFromDatabase = this.baseGetFile.get(fileName);

    if (findFileFromDatabase instanceof Error) throw findFileFromDatabase;

    this.cacheHandler.set(fileName, findFileFromDatabase);

    return findFileFromDatabase;
  }
}

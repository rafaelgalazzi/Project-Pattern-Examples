import { BaseGetFile } from './BaseGetFile';
import { FileExample, GetFileTemplate } from './GetFileTemplate';

export class BaseGetFileProxy extends GetFileTemplate {
  private baseGetFile: BaseGetFile;
  constructor(baseGetFile: BaseGetFile) {
    super();
    this.baseGetFile = baseGetFile;
  }

  get(fileName: string): FileExample | Error {
    console.log('Executing additional logic!');

    return this.baseGetFile.get(fileName);
  }
}

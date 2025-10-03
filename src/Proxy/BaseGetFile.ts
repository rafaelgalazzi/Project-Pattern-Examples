import { GetFileTemplate, type FileExample } from './GetFileTemplate';

export class BaseGetFile extends GetFileTemplate {
  private fileDatabase: FileExample[];
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

  get(fileName: string): FileExample | Error {
    const foundFile = this.simulateDataBaseConnection(fileName);
    if (!foundFile) throw Error(`File not found: ${fileName}`);
    return foundFile;
  }

  private simulateDataBaseConnection(fileName: string) {
    const start = Date.now();
    while (Date.now() - start < 4000) {}
    return this.fileDatabase.find((item) => item.name === fileName);
  }
}

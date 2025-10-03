export interface FileExample {
  name: string;
  content: string;
}

export abstract class GetFileTemplate {
  abstract get(fileName: string): FileExample | Error;
}

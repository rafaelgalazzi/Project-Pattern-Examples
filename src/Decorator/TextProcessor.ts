export abstract class TextProcessor {
  protected abstract processorRule: string;
  abstract process(text: string): string;
}

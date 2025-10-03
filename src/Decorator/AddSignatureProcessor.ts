import { TextProcessor } from './TextProcessor';

export class AddSignatureProcessor extends TextProcessor {
  protected processorRule: string;
  protected textProcessor: TextProcessor;

  constructor(textProcessor: TextProcessor, processorRule: string) {
    super();
    this.textProcessor = textProcessor;
    this.processorRule = processorRule;
  }

  process(text: string): string {
    const firstProcessment = this.textProcessor.process(text);

    return firstProcessment.concat(this.processorRule);
  }
}

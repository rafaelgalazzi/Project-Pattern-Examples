import { TextProcessor } from './TextProcessor';

export class BasicTextProcessor extends TextProcessor {
  protected processorRule: string;

  constructor(processorRule: string) {
    super();
    this.processorRule = processorRule;
  }

  process(text: string): string {
    return text.replace(this.processorRule, '');
  }
}

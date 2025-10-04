import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { TextProcessor } from './TextProcessor';
import { BasicTextProcessor } from './BasicTextProcessor';
import { AddSignatureProcessor } from './AddSignatureProcessor';

// Decorator Pattern using recursive composition to add new features to existent code, without changing the existent code.
export const decoratorPatternFunction = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  let textProcessor: TextProcessor = new BasicTextProcessor('T');
  textProcessor = new AddSignatureProcessor(textProcessor, ' Signature');
  const processedText = textProcessor.process('TEXT EXAMPLE');

  return {
    statusCode: 200,
    body: `Text processed: ${processedText}`,
  };
};

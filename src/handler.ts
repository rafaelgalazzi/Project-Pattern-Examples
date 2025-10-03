import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from 'aws-lambda';

import { AddSignatureProcessor } from './Decorator/AddSignatureProcessor';
import { BasicTextProcessor } from './Decorator/BasicTextProcessor';
import { TextProcessor } from './Decorator/TextProcessor';
import { BaseGetFile } from './Proxy/BaseGetFile';
import { errorHandler } from './commom/WrapperErrorHandler';

// Decorator Pattern using recursive composition to add new features to existent code, without changing the existent code.
export const decoratorPatterExample = errorHandler(
  async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
    let textProcessor: TextProcessor = new BasicTextProcessor('T');
    textProcessor = new AddSignatureProcessor(textProcessor, ' Signature');
    const processedText = textProcessor.process('TEXT EXAMPLE');

    return {
      statusCode: 200,
      body: `Text processed: ${processedText}`,
    };
  }
);

export const proxyPatternExample = errorHandler(
  async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log(event.queryStringParameters);

    const getFileFunction = new BaseGetFile();
    const fileName = event.queryStringParameters?.name || 'Test';
    const getFileFromDatabase = getFileFunction.get(fileName);

    if (getFileFromDatabase instanceof Error) {
      throw Error('File not found');
    }

    return {
      statusCode: 200,
      body: `Found Item: ${getFileFromDatabase.name} Content: ${getFileFromDatabase.content}`,
    };
  }
);

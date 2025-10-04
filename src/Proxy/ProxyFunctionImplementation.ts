import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { BaseGetFile } from './BaseGetFile';
import { BaseGetFileProxy } from './BaseGetFileProxy';

// Proxy pattern we inject the main class inside a proxy class where we can make additional logic without changing the original code
export const proxyPatternFunction = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log(event.queryStringParameters);

  const getFileHandler = new BaseGetFile();
  const getFileHandlerProxy = new BaseGetFileProxy(getFileHandler);

  const fileName = event.queryStringParameters?.name;

  if (!fileName) {
    throw Error('Property name is required.');
  }

  const getFileFromDatabase = getFileHandlerProxy.get(fileName);

  if (getFileFromDatabase instanceof Error) {
    throw Error('File not found');
  }

  return {
    statusCode: 200,
    body: `Found Item: ${getFileFromDatabase.name} Content: ${getFileFromDatabase.content}`,
  };
};

import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { DatabaseConnection } from './DatabaseConnection';

export const singletonPatternFunction = async () => {
  const database = {
    read: <T>(form: T) => form,
    write: <T>(form: T) => form,
  };

  const databaseInstance = DatabaseConnection.getInstance('www.example.com', database);
  const read1 = databaseInstance.read({ name: 'Test 1' });

  const databaseInstance2 = DatabaseConnection.getInstance('www.example.com', database);
  const read2 = databaseInstance2.read({ name: 'Test 2' });

  return {
    statusCode: 200,
    body: `Read result: ${read1.name} ${read2.name}`,
  };
};

export const singletonPatternLambda = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  return singletonPatternFunction();
};

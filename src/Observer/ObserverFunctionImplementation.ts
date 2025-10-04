import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export const observerPatternFunction = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log(event.queryStringParameters);

  return {
    statusCode: 200,
    body: `Notification`,
  };
};

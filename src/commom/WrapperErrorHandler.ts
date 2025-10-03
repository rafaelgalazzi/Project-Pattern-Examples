import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export function errorHandler(
  handler: (event: APIGatewayProxyEvent, context: Context) => Promise<APIGatewayProxyResult>
) {
  return async function (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
    try {
      return await handler(event, context);
    } catch (e: unknown) {
      console.error('Lambda error:', e);

      return {
        statusCode: 400,
        body: JSON.stringify({
          error: e instanceof Error ? e.message : 'Internal Server Error',
        }),
      };
    }
  };
}

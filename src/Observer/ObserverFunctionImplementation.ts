import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { LiveChecker } from './LiveChecker';
import { NotifyLiveInDiscord } from './NotifyLiveInDiscord';
import { NotifyLiveInEmail } from './NotifyLiveInEmail';
import { NotifyLiveInTwitter } from './NotifyLiveInTwitter';

export const observerPatternFunction = async () => {
  const liveChecker = new LiveChecker();
  const notifyDiscord = new NotifyLiveInDiscord();
  const notifyEmail = new NotifyLiveInEmail();
  const notifyTwitter = new NotifyLiveInTwitter();

  liveChecker.subscribe(notifyDiscord);
  liveChecker.subscribe(notifyEmail);
  liveChecker.subscribe(notifyTwitter);

  liveChecker.verifyLive();

  return {
    statusCode: 200,
    body: `Notification`,
  };
};

export const observerPatternLambda = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  return observerPatternFunction();
};

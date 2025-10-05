import { EventSubscriberTemplate } from './EventSubscriberTemplate';

export class NotifyLiveInDiscord extends EventSubscriberTemplate {
  public update(): void {
    console.log('Notify in discord!');
  }
}

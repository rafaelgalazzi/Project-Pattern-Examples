import { EventSubscriberTemplate } from './EventSubscriberTemplate';

export class NotifyLiveInTwitter extends EventSubscriberTemplate {
  public update(): void {
    console.log('Notify in twitter!');
  }
}

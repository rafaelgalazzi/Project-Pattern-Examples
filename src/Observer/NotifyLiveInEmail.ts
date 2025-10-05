import { EventSubscriberTemplate } from './EventSubscriberTemplate';

export class NotifyLiveInEmail extends EventSubscriberTemplate {
  public update(): void {
    console.log('Notify in email!');
  }
}

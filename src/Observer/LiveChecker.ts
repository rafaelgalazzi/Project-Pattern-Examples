import { EventPublisherTemplate } from './EventPublisherTemplate';
import { EventSubscriberTemplate } from './EventSubscriberTemplate';

export class LiveChecker extends EventPublisherTemplate {
  protected subscribers: EventSubscriberTemplate[] = [];

  constructor() {
    super();
  }

  private getIfIsInLive(): boolean {
    return Math.random() < 0.5;
  }

  verifyLive() {
    const isInLive = this.getIfIsInLive();
    console.log('Is in Live: ', isInLive);

    if (isInLive) {
      this.notify();
    }
  }

  public subscribe(subscribe: EventSubscriberTemplate): void {
    if (!this.subscribers.includes(subscribe)) this.subscribers.push(subscribe);
  }

  public unsubscribe(subscribe: EventSubscriberTemplate): void {
    this.subscribers = this.subscribers.filter((item) => item !== subscribe);
  }

  protected notify(): void {
    for (let item of this.subscribers) {
      item.update();
    }
  }
}

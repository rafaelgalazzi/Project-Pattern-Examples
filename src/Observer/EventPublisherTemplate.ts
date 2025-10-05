import { EventSubscriberTemplate } from './EventSubscriberTemplate.js';

// Making with abstract class but it could be better with interfaces in typescript
export abstract class EventPublisherTemplate {
  protected abstract subscribers: EventSubscriberTemplate[];

  public abstract subscribe(subscribe: EventSubscriberTemplate): void;
  public abstract unsubscribe(subscribe: EventSubscriberTemplate): void;

  protected abstract notify(): void;
}

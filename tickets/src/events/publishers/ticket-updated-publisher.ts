import { Publisher, Subjects, TicketUpdatedEvent } from '@tclick/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}

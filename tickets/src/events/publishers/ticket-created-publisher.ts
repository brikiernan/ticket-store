import { Publisher, Subjects, TicketCreatedEvent } from '@tclick/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}

# PubSub

Publish/subscribe messaging is a pattern that is characterized by the sender (publisher) of a piece of data (message) not specifically directing it to a receiver. Instead, the publisher classifies the message somehow, and that receiver (subscriber) subscribes to receive certain classes of messages. Pub/sub systems often have a broker, a central point where messages are published, to facilitate this.

**RabbitMQ**:-

- Variations of pub-sub,Request-Response & point-to-point patterns.
- Smart Broker model.
- Can be asynchronous/synchronous.
- Push based approach.
- Prioritize message.
- Decoupled consumer queries.

- Quesues are single-threaded.
- complex with more brokers.
- No events replay(Message not saved).
- No native streaming support.

Useful when you don't need reply,No clear picture of E2E architecture.It is language agnostics microservices architecture.

**Kafka**:-

- Pub-Sub for streaming platforms.
- Smart Consumer model.
- Durable Message store
- Pull based model.
- Order,retain,Guarantee messages.
- Coupled consumer partitions/groups.

- Storage overheads.
- Streaming API for pecific languages.
- Needs producer coordination with consumer for partition increases.

Useful when you want replay,Streaming,high throughput.

# Background Jobs & Task Queues

Any code that runs outside the request-response cycle, deferred, retryable, non-blocking, is a background job.

**Background Task** - A background task (also called a background job) is any piece of code, logic, or workflow that runs outside of the request-response lifecycle. Think of your typical HTTP interaction: a client sends a request, your server processes it and sends a response. Anything that doesn't need to happen within that tight window is a candidate for a background task.
The key characteristic: it does not need to be synchronous. It is not mission-critical in the sense that the client is waiting for it right now. Because of this, we can safely offload it to a separate process that finishes in its own time, according to how it has been programmed.

```
CLIENT <----------------> SERVER(main process) - - -> BACKGROUND TASK
```

**Task Queues** - A task queue is a system for managing and distributing background jobs. It is the engine behind the scenes that enables reliable, decoupled background processing. Think of it as a to-do list for your backend, your application adds items to the list, and workers pick them off one by one.

`Producer` - Your application code (any language/framework). Creates a task, serializes it (usually JSON), and pushes it into the queue. This is called enqueuing (ENQ).
`Queue / Broker` - The middleware that stores tasks until a worker is ready. Examples: Redis, RabbitMQ, Amazon SQS. Provides durability, ordering, and delivery guarantees.
`Consumer / Worker` - A separate process (or thread) that constantly polls the queue, picks up tasks (this is dequeuing: DEQ), deserializes them, and executes the registered handler function.
`Handler` - The actual function/method registered for a task type. Contains the real business logic (e.g., calling the email API). Same code you'd run synchronously, but now living inside a worker.

_Brokers & Technologies_ - The "queue" is backed by a real piece of infrastructure, a message broker. Here are the main options:

- Redis (Pub/Sub + Lists) - In-memory store - Fast, low-latency tasks. Celery + BullMQ default. - Data can be lost on crash unless persistence is enabled (AOF/RDB).
- RabbitMQ - AMQP message broker - Complex routing, fanout, topic exchanges. - Very reliable, rich routing rules, requires ops overhead.
- Amazon SQS - Managed cloud queue - Scalable, multi-region, serverless-friendly. - AWS-native, no server management. Standard + FIFO queues.
- Redis Streams - Persistent log - Consumer groups, replay, auditing. - More durable than basic Redis lists. Good for Asynq (Go).
- Kafka

## PubSub

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

## Message Brokers

Message brokers are an inter-application communication technology to help build a common integration mechanism to support cloud-native, microservices-based, serverless, and hybrid cloud architectures. Two of the most famous message brokers are `RabbitMQ` and `Apache Kafka`

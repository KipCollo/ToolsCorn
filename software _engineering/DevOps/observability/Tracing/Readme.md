# Tracing

s distributed systems grew in scale, it became clear that traditional logging systems often fell short when trying to debug complex problems. The reason is that we often have to understand the chain of events in a system. On a single machine, stack traces allow us to track an exception back to a line of code. In a distributed environment, we don’t have this luxury. Instead, we perform extensive filtering to locate log events of interest. To understand the larger context, we must identify other related events, such as the specific requests or transactions that initiated the log entry and the sequence of services or microservices involved in processing that request across the system. This often results in a lot of manual labor (e.g. comparing timestamps) or requires extensive domain knowledge about the applications. Recognizing this problem, Google developed Dapper, which popularized the concept of distributed tracing.

On a fundamental level, tracing is logging on steroids. The underlying idea is to add transactional context to logs. This makes it possible to infer causality and reconstruct the journey of requests in the system.

It includes:-

Jaeger,opentracing,elastic apm,honeycom.io,lightstep,opentelemetry,pinpoint,skywalking,SDFATracer,Spring Cloud Sleuth,Zipkin.

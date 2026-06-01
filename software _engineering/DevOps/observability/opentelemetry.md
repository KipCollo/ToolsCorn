# OPENTELEMETRY

`OpenTelemetry`is a powerful framework that provides developers with the tools to monitor, trace, and log their applications with a unified observability solution.
OpenTelemetry (OTel) is an open source project designed to provide standardized tools and APIs for generating, collecting, and exporting telemetry data such as traces, metrics, and logs. It aims to give developers deep visibility into applications, helping to monitor, troubleshoot, and optimize software systems.

The main goals of OpenTelemtry are:

1. Unified telemetry: Combines tracing, logging, and metrics into a single framework enabling correlation of all data and establishing an open standard for telemetry data.
2. Vendor-neutrality: Integration with different backends for processing the data.
3. Cross-platform: Supports various languages (Java, Python, Go, etc.) and platforms, making it versatile for different development environments.

In today's digital age, where microservices architectures and cloud-native solutions are prevalent, the ability to observe and understand the behavior of distributed systems is crucial. There are already many solutions to tackle this, but the solutions, protocols and data formats are not unified nor correlated. OpenTelemetry addresses the challenges of monitoring modern software environments by offering a unified API and set of tools that can be integrated into various languages, platforms and frameworks.

**The need for correlated telemetry using the signals of OpenTelemetry**:-

`First, there are deficits in the quality of telemetry data.` To illustrate this, let’s imagine that we want to investigate the root cause of a problem. The first indicator of a problem is usually an alert or an anomaly in a metrics dashboard. To confirm the incident is worth investigating, we have to form an initial hypothesis. The only information we currently have is that something happened at a particular point in time. Therefore, the first step is to use the metrics system to look for other metrics showing temporally correlated, abnormal behavior.

After making an educated guess about the problem, we want to drill down and investigate the root cause of the problem. To gain additional information, we typically switch to the logging system. Here, we write queries and perform extensive filtering to find log events related to suspicious metrics.

After discovering log events of interest, we often want to know about the larger context in which the operation took place. Unfortunately, traditional logging systems lack the mechanisms to reconstruct the chain of events in that particular transaction. Traditional logging systems often fail to capture the full context of an operation, making it difficult to correlate events across different services or components. They frequently lack the ability to preserve critical metadata, such as trace IDs or span IDs, which are essential for linking related events together. This limitation results in fragmented views of the system’s behavior, where the story of a single operation is spread across multiple logs without a clear narrative. Furthermore, the absence of standardized query languages or interfaces adds to the difficulty of searching and analyzing logs effectively, as operators must rely on custom scripts or manual filtering to uncover patterns and anomalies.

If we switch our perspectives from someone building an observability solution to someone using it, an inherent disconnect is revealed. The real world isn’t made up of logging, metrics, or tracing problems. Instead, we have to move back and forth between different types of telemetry to build up a mental model and reason about the behavior of a system. Since observability tools are silos of disconnected data, figuring out how pieces of information relate to one another causes a significant cognitive load for the operator.

`Lack of Instrumentation Standard Leads to Low Quality Data` Another factor that makes root-cause analysis hard is that telemetry data often suffers from a lack of consistency. This leads to difficulties in correlating events across different services or components, as there is no standardized way to identify related events, such as through trace IDs or span IDs. Additionally, there is no straightforward method to integrate multiple solution-specific logging libraries into a coherent system, resulting in fragmented and disjointed views of the system’s behavior.

`No Built-in Instrumentation in Open Source Software` Let’s look at this from the perspective of open source software developers. Today, most applications are built on top of open source libraries, frameworks, and standalone components. With a majority of work being performed outside the business logic of the application developer, it is crucial to collect telemetry from open source components. The people with the most knowledge of what is important when operating a piece of software are the developers and maintainers themselves. However, there is currently no good way to communicate through native instrumentation.

One option would be to pick the instrumentation of an observability solution. However, this would add additional dependencies to the project and force users to integrate it into their systems. While running multiple logging and metrics systems is impractical but technically possible, tracing is outright impossible as it requires everyone to agree on a standard for trace context propagation to work.

A common strategy for solving problems in computer science is to add a layer of indirection. Instead of embedding vendor-specific instrumentation, open source developers often provide observability hooks. This allows users to write adapters that connect the open source component to their observability system. While this approach provides greater flexibility, it also has its fair share of problems. For example, whenever there is a new version of software, users have to notice and update their adapters. Moreover, the indirection also increases the overhead, as we have to convert between different telemetry formats.

`Combining Telemetry Generation with Instrumentation Tools Results in Vendor Lock-in`
Let’s put on the hat of an end user. After committing to a solution, the application contains many solution-specific library calls throughout its codebase. To switch to another observability tool down the line, we would have to rip out and replace all existing instrumentation and migrate our analysis tooling. This upfront cost of re-instrumentation makes migration difficult, which is a form of vendor lock-in.

`Struggling Observability Vendors / High Barrier for Entry` The last part of the equation is the observability vendors themselves. At first glance, vendors appear to be the only ones profiting from the current situation. In the past, high-quality instrumentation was a great way to differentiate yourself from the competition. Moreover, since developing integrations for loads of pre-existing software is expensive, the observability market has a relatively high barrier to entry.

With customers shying away from expensive re-instrumentation, established vendors have faced less competition and pressure to innovate. However, they are also experiencing major pain points. The rate at which software is being developed has increased exponentially over the last decade. Today’s heterogeneous software landscape makes it impossible to maintain instrumentation for every library, framework, and component. As soon as a vendor starts struggling with supplying instrumentation, customers will start refusing to adopt their product. As a result, solutions compete over who can build the best n-to-n format converter instead of investing these resources into creating great analysis tools. Another downside is that converting data that was generated by foreign sources often leads to a degradation in the quality of telemetry. Once data is no longer well-defined, it becomes harder to analyze.

**OpenTelemetry is**:

1. `Not an All-in-One Monitoring or Observability Tool` - OpenTelemetry doesn't replace full-fledged monitoring or observability platforms like Datadog, New Relic, or Prometheus. Instead, it helps collect and standardize telemetry data (traces, metrics, logs) so that you can send it to these tools for visualization and analysis.
2. `Not a Data Storage or Dashboarding Solution` - OpenTelemetry doesn’t store or visualize data. It focuses on the collection and export of telemetry data to external systems that handle storage and presentation, such as Grafana, Jaeger, or Prometheus.
3. `Not a Pre-configured Monitoring Tool` - OpenTelemetry is a toolkit for collecting and exporting data, but it requires configuration and integration with other systems. It doesn’t automatically provide out-of-the-box monitoring or alerting functionality.
4. `Not a Performance Optimizer` - While OpenTelemetry helps you collect detailed performance data, it doesn’t automatically optimize application performance. It's a diagnostic tool that helps you gather insights for manual tuning.

In essence, OpenTelemetry is an integration and standardization tool for telemetry data, not an all-in-one solution for monitoring, logging, or performance management. It complements other tools by standardizing the data collection process.

## OpenTelemetry Framework

`Signal Specification`, which is language-agnostic and ensures consistency in how telemetry data (logs, metrics, traces) is defined and gathered across different platforms and languages.
`Vendor-Agnostic Instrumentation`, emphasizing how OpenTelemetry enables telemetry collection in specific programming languages while maintaining independence from any particular vendor's observability toolset.
`OTLP (OpenTelemetry Protocol)`, which standardizes the transmission of telemetry data across the system, ensuring reliable communication between different components.
`OTel SDK and API specification`, which defines how developers interact with OpenTelemetry, and the Semantic Conventions, which provide consistent labeling and structure for telemetry data, improving the clarity and usefulness of collected information.

**Signal Specification (Language-Agnostic)** - On a high level, OpenTelemetry is organized into signals, which mainly include tracing, metrics and logging. Every signal is developed as a standalone component (but there are ways to connect data streams to one another). Signals are defined inside OpenTelemetry’s language-agnostic specification, which lies at the very heart of the project. The end-user probably won’t come into direct contact with the specification, but it plays a vital role in ensuring consistency and interoperability within the OpenTelemetry ecosystem.

The specification consists of three parts. 
- First, there are definitions of terms that establish a common vocabulary and shared understanding to avoid confusion.
- Second, it specifies the technical details of how each signal is designed. This includes:
    - an API specification (Tracing API, Metrics API, and OpenTelemetry Logging)
        - defines (conceptual) interfaces that implementations must adhere to
        - ensures that implementations are compatible with each other
        - includes the methods that can be used to generate, process, and export telemetry data
    - an SDK specification (Tracing SDK, Metrics SDK, Logs SDK)
        - serves as a guide for developers
        - defines requirements that a language-specific implementation of the API must meet to be compliant
        - includes concepts around the configuration, processing, and exporting of telemetry data
Besides signal architecture, the specification also covers aspects related to telemetry data. For example, OpenTelemetry defines semantic conventions. By pushing for consistency in the naming and interpretation of common telemetry metadata, OpenTelemetry aims to reduce the need to normalize data coming from different sources.
- Finally, there is also the OpenTelemetry Protocol (OTLP).


**Vendor-Agnostic, Language-Specific Instrumentation** - To generate and emit telemetry from applications, we use language-specific implementations, which adhere to OpenTelemetry’s specification. OpenTelemetry supports a wide-range of popular programming languages at varying levels of maturity. The implementation of a signal consists of two parts:

- API
    - defines the interfaces and constants outlined in the specification
    - used by application and library developers for vendor-agnostic instrumentation
    - refers to a no-op implementation by default
- SDK
    - provider implements the OpenTelemetry API
    - contains the actual logic to generate, process and emit telemetry
    - OpenTelemetry ships with official providers that serve as the reference implementation (commonly referred to as the SDK)
    - it is possible to write your own

Generally speaking, we use the OpenTelemetry API to add instrumentation to our source code. In practice, this can be achieved in various ways, such as:
1. zero-code or automatic instrumentation (if available and to avoid code changes)
2. instrumentation libraries that provide simplified OpenTelemetry integration (which may or may not require code changes)
3. manual or code-based instrumentation (for fine-grained control, deeply embedded in the code).

On startup, the application registers a provider for every type of signal. After that, calls to the API are forwarded to the respective provider. If we don’t explicitly register one, OpenTelemetry will use a fallback provider that translates API calls into no-ops.

The primary reason for separating the API from the SDK is that it makes it easier to embed native instrumentation into open source library code. OpenTelemetry’s API is designed to be lightweight and safe to depend on. The signal’s implementation provided by the SDK is significantly more complex and likely contains dependencies on other software. Forcing these dependencies on users could lead to conflicts with their particular software stack. Registering a provider during the initial setup allows users to resolve dependency conflicts by choosing a different implementation. Furthermore, it allows us to ship software with built-in observability without forcing the runtime cost of instrumentation onto users that don’t need it.

**Telemetry Processor (Standalone Component)**:- After generating and emitting telemetry, operators are responsible for managing and ingesting it into the respective backends. This includes tasks such as:
1. gathering data from various sources
2. parsing and converting it for downstream processing
3. enrichment with additional metadata
4. filtering out irrelevant data to reduce noise and storage requirements
5. normalization and applying transformations
6. buffering for resilience and performance
7. routing to steer subsets of telemetry to different destinations
8. forwarding to backends

To build and configure such telemetry pipelines, operations teams often deploy additional infrastructure. A popular example is the fluentbit telemetry agents. Similarly, OpenTelemetry provides a standalone component with these capabilities: the OpenTelemetry Collector.


**Wire Protocol**:- Completing the standardization, generation, and management package, OpenTelemetry also defines how to transport telemetry between producers, agents, and backends.

- The `OpenTelemetry Protocol (OTLP)` is an open source and vendor-neutral wire format that defines:
    - how data is encoded in memory
    - a protocol to transport that data across the network

As a result, OTLP is used throughout the observability stack. Emitting telemetry in OLTP means that instrumented applications and third-party services are compatible with countless observability solutions. The Collector supports receiving telemetry from and exporting to a various formats (e.g., Prometheus Metrics, Zipkin traces, etc.). However, OTLP is generally preferred because the Collector uses it internally to represent and process telemetry. Thereby, we avoid the cost of converting between formats and increase consistency. This is because the native format closely aligns with the ideas proposed by the framework (having attributes follow semantic conventions, cross-signal correlation, etc.).

Similarly, most observability backends support OTLP right out of the box. Given the rapid adoption of OpenTelemetry, integrating with OTLP automatically gives you access to a broad audience of potential users. Moreover, an open and vendor-neutral telemetry protocol means less work for developers of observability tools. Before, you had to develop countless adapters to be able to ingest data arriving in various proprietary formats. In other words, OTLP is a significant push for interoperability between tools and services in the observability ecosystem.

OTLP offers three transport mechanisms for transmitting telemetry data: HTTP/1.1, HTTP/2, and gRPC. When using OTLP, the choice of transport mechanism depends on application requirements, considering factors such as performance, reliability, and security. OTLP data is often encoded using the Protocol Buffers (Protobuf) binary format, which is compact and efficient for network transmission and supports schema evolution, allowing for future changes to the data model without breaking compatibility. Data can also be encoded in the JSON file format, which allows for a human-readable format with the disadvantage of higher network traffic and larger file sizes.

## Instrumentation

Instrumentation refers to the process of adding code or using tools to collect telemetry data (such as logs, metrics, and traces) from an application.

In other words it means you add something to your application code, which turns a non-observed application into an application that emits data from within the application. Instrumented applications are like the difference between a foreign language film and one with subtitles; The instrumentation explains what's happening.

This data provides insights into how the application behaves at runtime, helping developers monitor performance, diagnose issues, and understand overall system health.

In the context of observability, instrumentation is a critical first step. It enables the collection of telemetry signals that allow observability tools to track and visualize how an application and its components are performing. By instrumenting applications, developers can identify bottlenecks, trace requests across distributed services, and monitor resource usage—all essential for understanding system behavior in real-time.
However, instrumentation is often highly dependent on the programming language and framework in use. This means that instrumentation code tends to be proprietary, tailored to the specific tools, libraries, and architecture of each application. As a result, developers must often implement custom instrumentation for each language or framework they work with, which can lead to challenges in maintaining consistency across different parts of a system, especially in polyglot (multi-language) environments.

It also means that the more specific the information you want to extract from your application, the more specific your instrumentation effort has to be.

The instrumentation also defines which kind of telemetry signals are being handled.

**Different Instrumentation Types**:- There are three different instrumentation categories for OTel: automatic, libraries, and manual.

Categories for OpenTelemetry:-

- `Automatic Instrumentation (or zero-code)`:-
    - No code changes required: Automatically instruments applications without modifying the source code.
    - Typically provided by OpenTelemetry agents or plugins: These agents attach to the runtime of the application and automatically collect telemetry data.
    - Ideal for quick setup: It works out of the box and is used to gather traces, metrics, and logs without manual intervention.
    - Less granular control: While easy to use, automatic instrumentation may not offer as much fine-tuning or customization as manual instrumentation.
    Examples:- OpenTelemetry agents for Java or Python, which can automatically instrument common libraries like HTTP, databases, or messaging systems.
- `Instrumentation Libraries (potentially code-based)`:-
    - May require minimal code changes: Libraries are often specific to a programming language or framework and are integrated by importing them into the code. Some libraries provide easy integration with minimal configuration, while others might need manual intervention.
    - Provides more flexibility: They allow you to add instrumentation where automatic methods may not reach or to extend it with custom logic.
    - Control over integration: You can use libraries to instrument specific parts of an application in more detail.
    Examples:- OpenTelemetry instrumentation libraries for specific frameworks like Django (Python) or Spring (Java), where you might need to configure middleware or wrap methods to enable tracing or metrics.
- `Manual Instrumentation (fully code-based)`
    - Requires explicit code changes: Manual instrumentation involves directly adding OpenTelemetry API calls in the source code.
    - Fine-grained control: It gives developers full control over what gets instrumented, how it is measured, and what data is collected. You can choose exactly where to start and end traces, log specific events, or capture custom metrics.
    - Customization: It is the most flexible approach, allowing developers to instrument any part of the application, regardless of whether automatic or library-based options are available.
    - More effort and maintenance: Manual instrumentation takes more time to implement and maintain, as developers need to explicitly manage spans, metrics, and logging points in the code.
    Examples:- Using OpenTelemetry's API to define custom spans, attributes, or events, such as manually wrapping a specific block of code in a custom trace.
    Adding custom metrics that are not automatically captured, such as counting how many times a particular business function is called.

*Instrumentation Libraries*:- The long-term vision of OpenTelemetry is for third-party libraries or frameworks to ship with native OpenTelemetry instrumentation, providing out-of-the-box observability. However, not all projects have native support for the evolving OpenTelemetry APIs. To address this gap, instrumentation libraries have been developed. These libraries help increase OpenTelemetry adoption without relying entirely on library maintainers.

An instrumentation library is a standalone, separately installed library designed to inject OpenTelemetry API calls into a library or framework lacking native integration. The approach varies depending on the programming language and the specific library, including techniques such as wrapping interfaces, monkey-patching code, and registering callbacks on library-specific hooks.

OpenTelemetry maintains a registry of these libraries, which includes many options for different frameworks and programming languages.

Instrumentation libraries offer a valuable way to enhance observability in third-party libraries or frameworks lacking native OpenTelemetry support. They simplify the adoption process but come with challenges:

1. Dependency Management: Adds complexity and requires careful maintenance.
2. Community Support: Libraries may have limited support and resources compared to native integrations.

Instrumentation libraries are especially useful when native instrumentation is unavailable and manual instrumentation is impractical. They are often used in conjunction with OpenTelemetry’s auto-instrumentation, which dynamically injects observability into applications without code changes.


## OpenTelemetry Collector

The OpenTelemetry Collector is a critical infrastructure component that decouples telemetry generation from its processing and export, allowing for flexible configuration outside the application code. Centralizing telemetry management, streamlines monitoring and observability across diverse systems, improving scalability, maintainability, and operational efficiency.
The Collector is a key component of OpenTelemetry that manages how telemetry is processed and forwarded.

With the SDK, the telemetry pipeline was defined in the application code. Depending on your use case, this approach can be perfectly fine. A Collector, on the other hand, is a binary written in Go, that runs as a separate, standalone process. It provides a flexible, configurable, and vendor-agnostic system to process telemetry outside the application. It is essentially a broker between a telemetry source and the backend storing the data.

**Architecture of a Collector Pipeline**:- The pipeline for a telemetry signal consists of a combination of receivers, processors, and exporters.

`Receivers`:- A receiver is how data gets from a source (i.e. the application) to the OpenTelemetry collector. This mechanism can either be pull- or push-based. Out-of-the-box, the Collector supports an OTLPReceiver for receiving traces, metrics, and logs in OpenTelemetry’s native format. The collector-contrib repository includes a range of receivers to ingest telemetry data encoded in various protocols. For example, there is a ZipkinReceiver for traces, StatsdReceiver and PrometheusReceiver and much more. Once data has been imported, receivers convert telemetry into an internal representation. Then, receivers pass the collected telemetry to a chain of processors.

`Processors`:- A processor provides a mechanism to pre-process telemetry before sending it to a backend. There are two categories of processors, some apply to all signals, while others are specific to a particular type of telemetry. Broadly speaking, processing telemetry is generally motivated by several reasons:

1. To improve the data quality
    - add, delete, rename, transform attributes
    - create new telemetry based on existing data
    - convert an older version of a data source into one that matches the current dashboards and queries used by the backend
2. For governance and compliance reasons - use attributes to route data to specific backends
3. To reduce cost - drop unwanted telemetry via allow and deny lists,tail-based sampling
4. Security - scrubbing data to prevent sensitive information from being stored (and potentially leaked) in a backend
To influence how data flows through the pipeline - batch,retry,memory limit

By connecting processors into a sequential hierarchy, we can process telemetry in complex ways. Since data is passed from one processor to the next, the order in which processors are specified matters.

`Exporters` - Finally, the last processor in a chain hands its output to an exporter. The exporter takes the data, converts the internal representation into a protocol of choice, and forwards it to one (or more) destination. Similar to receivers, the collector ships with built-in exporters for OTLP. As previously mentioned, many open source or commercial observability backends are built around custom data formats. Even though OpenTelemetry is becoming more popular, your current backend might not yet (or is in the early stages) support OTLP. To solve this, the collector-contrib repository includes exporters for many telemetry protocols.

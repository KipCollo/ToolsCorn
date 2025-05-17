# Prometheus

- Is an open source system monitoring and alerting toolkit originally built at soundcloud. It collects and stores its metrics as time series data from configured targets,stores them in time-series database and provides powerful query features.
Prometheus collects and stores its metrics as time series data, i.e. metrics information is stored with the timestamp at which it was recorded, alongside optional key-value pairs called labels.
In 2016 the Prometheus project became the second member1 of the Cloud Native Computing Foundation (CNCF).
- It can monitor:
    1. Linux/ Windows servers
    2. Http Servers(Apache, Nginx)
    3. Single application
    4. Services e.g database

Prometheus provides:

1. Time-Series Database:-Stores metrics data in time-series format,with labels for easy identification.
2. PromQL:-A powerful query language used to query data and create complex calculations over time-series metrics
3. Alerting:-Built-in alerting capabilities for detecting anomalies or issues in your system
4. Pull-Based Architecture:-Prometheus scrapes metrics from endpoints (pull model) rather than relying on external systems to push data
5. Self-Sufficient Monitoring:- Does not rely on external dependencies for data collection and alerting.

A simple text format makes it easy to expose metrics to Prometheus. Other monitoring systems, both open source and commercial, have added support for this format.
This allows all of these monitoring systems to focus more on core features, rather than each having to spend time duplicating effort to support every single piece of software a user like you may wish to monitor.
The data model identifies each time series not just with a name, but also with an unordered set of key-value pairs called labels. The PromQL query language allows aggregation across any of these labels, so you can analyse not just per process but also per datacenter and per service or by any other labels that you have defined. These can be graphed in dashboard systems such as Grafana.

Alerts can be defined using the exact same PromQL query language that you use for graphing. If you can graph it, you can alert on it. Labels make maintaining alerts easier, as you can create a single alert covering all possible label values. In some other monitoring systems you would have to individually create an alert per machine/application. Relatedly, service discovery can automatically determine what applications and machines should be scraped from sources such as Kubernetes, Consul,Amazon Elastic Compute Cloud (EC2), Azure, Google Compute Engine (GCE), and OpenStack.

For all these features and benefits, Prometheus is performant and simple to run. A single Prometheus server can ingest millions of samples per second. It is a single statically linked binary with a configuration file. All components of Prometheus can be run in containers, and they avoid doing anything fancy that would get in the way of configuration management tools. It is designed to be integrated into the infrastructure you already have and built on top of, not to be a management platform itself.

Operational monitoring of computer systems down to four things:

`Alerting` - Knowing when things are going wrong is usually the most important thing that you want monitoring for. You want the monitoring system to call in a human to take a look.
`Debugging` - Now that you have called in a human, they need to investigate to determine the root cause and ultimately resolve whatever the issue is.
`Trending` - Alerting and debugging usually happen on time scales on the order of minutes to hours. While less urgent, the ability to see how your systems are being used and changing over time is also useful. Trending can feed into design decisions and processes such as capacity planning.
`Plumbing` - When all you have is a hammer, everything starts to look like a nail. At the end of the day all monitoring systems are data processing pipelines. Sometimes it is more convenient to appropriate part of your monitoring system for another purpose, rather than building a bespoke solution. This is not strictly monitoring, but it is common in practice so I like to include it.

## Components

The Prometheus ecosystem consists of multiple components, many of which are optional:
• the main Prometheus server (https://github.com/prometheus/prometheus) which scrapes and stores time series data
• client libraries (/docs/instrumenting/clientlibs/) for instrumenting application code
• a push gateway (https://github.com/prometheus/pushgateway) for supporting short-lived jobs
• special-purpose exporters (/docs/instrumenting/exporters/) for services like HAProxy, StatsD, Graphite, etc.
• an alertmanager (https://github.com/prometheus/alertmanager) to handle alerts
• various support tools

Most Prometheus components are written in Go (https://golang.org/), making them easy to build and deploy as static binaries.

Prometheus scrapes metrics from instrumented jobs, either directly or via an intermediary push gateway for short-lived jobs. It stores all scraped samples locally and runs rules over this data to either aggregate and record new time series from existing data or generate alerts. Grafana (https://grafana.com/) or other API consumers can be used to visualize the collected data.

Prometheus works well for recording any purely numeric time series. It �ts both machine-centric monitoring as well as monitoring of highly dynamic service-oriented architectures.
In a world of microservices, its support for multi-dimensional data collection and querying is a particular strength.
Prometheus is designed for reliability, to be the system you go to during an outage to allow you to quickly diagnose problems. Each Prometheus server is standalone, not depending on network storage or other remote services. You can rely on it when other parts of your infrastructure are broken, and you do not need to setup extensive infrastructure to use it.

## Features

1. Dimensional data - Prometheus implements a highly dimensional data model. Time series are identified by a metric name and a set of key-value pairs.
2. Powerful queries - PromQL allows slicing and dicing of collected time series data in order to generate ad-hoc graphs, tables, and alerts.
3. Great visualization - Prometheus has multiple modes for visualizing data: a built-in expression browser, Grafana integration, and a console template language.
4. Efficient storage - Prometheus stores time series in memory and on local disk in an efficient custom format. Scaling is achieved by functional sharding and federation.
5. Simple operation - Each server is independent for reliability, relying only on local storage. Written in Go, all binaries are statically linked and easy to deploy.
6. Precise alerting - Alerts are defined based on Prometheus's flexible PromQL and maintain dimensional information. An alertmanager handles notifications and silencing.
7. Many client libraries - Client libraries allow easy instrumentation of services. Over ten languages are supported already and custom libraries are easy to implement.
8. Many integrations - Existing exporters allow bridging of third-party data into Prometheus. Examples: system statistics, as well as Docker, HAProxy, StatsD, and JMX metrics.

`METRICS`:- Metrics are numerical measurements in layperson terms. The term time series refers to the recording of changes over time. What users want to measure differs from application to application. For a web server, it could be request times; for a database, it could be the number of active connections or active queries, and so on.
Metrics play an important role in understanding why your application is working in a certain way. Let's assume you are running a web application and discover that it is slow.
To learn what is happening with your application, you will need some information.
The Prometheus client libraries offer four core metric types. These are currently only differentiated in the client libraries (to enable APIs tailored to the usage of the specific types) and in the wire protocol. The Prometheus server does not yet make use of the type information and flattens all data into untyped time series.

1. Counter - A counter is a cumulative metric that represents a single monotonically increasing counter whose value can only increase or be reset to zero on restart. For example, you can use a counter to represent the number of requests served, tasks completed, or errors.
Do not use a counter to expose a value that can decrease. For example, do not use a counter for the number of currently running processes; instead use a gauge.
Client library usage documentation for counters: Go, Java, Python, Ruby,.Net, Rust
2. Gauge - A gauge is a metric that represents a single numerical value that can arbitrarily go up and down.
Gauges are typically used for measured values like temperatures or current memory usage, but also "counts" that can go up and down, like the number of concurrent requests.
Client library usage documentation for gauges: Go, Java,Python,Ruby,.Net, Rust
3. Histogram - A histogram samples observations (usually things like request durations or response sizes) and counts them in configurable buckets. It also provides a sum of all observed values.
A histogram with a base metric name of <basename> exposes multiple time series during a scrape:

- cumulative counters for the observation buckets, exposed as <basename>_bucket{le="<upper inclusive bound>"}
- the total sum of all observed values, exposed as <basename>_sum
- the count of events that have been observed, exposed as <basename>_count (identical to <basename>_bucket{le="+Inf"} above)

Use the `histogram_quantile()` function to calculate quantiles from histograms or even aggregations of histograms. A histogram is also suitable to calculate an Apdex score. When operating on buckets, remember that the histogram is cumulative.
Client library usage documentation for histograms: Go,Java,Python,Ruby,.Net,Rust
4. Summary - Similar to a histogram, a summary samples observations (usually things like request durations and response sizes). While it also provides a total count of observations and a sum of all observed values, it calculates configurable quantiles over a sliding time window.
A summary with a base metric name of <basename> exposes multiple time series during a scrape:
    - streaming φ-quantiles (0 ≤ φ ≤ 1) of observed events, exposed as <basename>{quantile="<φ>"}
    - the total sum of all observed values, exposed as <basename>_sum
    - the count of events that have been observed, exposed as <basename>_count
Client library usage documentation for summaries: Go, Java, Python, Ruby,.Net

`JOBS and INSTANCES` - In Prometheus terms, an endpoint you can scrape is called an instance, usually corresponding to a single process. A collection of instances with the same purpose, a process replicated for scalability or reliability for example, is called a job.
For example, an API server job with four replicated instances:

    job: api-server
        instance 1: 1.2.3.4:5670
        instance 2: 1.2.3.4:5671
        instance 3: 5.6.7.8:5670
        instance 4: 5.6.7.8:5671

Automatically generated labels and time series - When Prometheus scrapes a target, it attaches some labels automatically to the scraped time series which serve to identify the scraped target:

- job: The configured job name that the target belongs to.
- instance: The <host>:<port> part of the target's URL that was scraped.

If either of these labels are already present in the scraped data, the behavior depends on the honor_labels configuration option.
For each instance scrape, Prometheus stores a sample in the following time series:

1. up{job="<job-name>", instance="<instance-id>"}: 1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed.
2. scrape_duration_seconds{job="<job-name>", instance="<instance-id>"}: duration of the scrape.
3. scrape_samples_post_metric_relabeling{job="<job-name>", instance="<instance-id>"}: the number of samples remaining after metric relabeling was applied.
4. scrape_samples_scraped{job="<job-name>", instance="<instance-id>"}: the number of samples the target exposed.
5. scrape_series_added{job="<job-name>", instance="<instance-id>"}: the approximate number of new series in this scrape. New in v2.10

The up time series is useful for instance availability monitoring.
With the extra-scrape-metrics feature flag several additional metrics are available:

1. scrape_timeout_seconds{job="<job-name>", instance="<instance-id>"}: The configured scrape_timeout for a target.
2. scrape_sample_limit{job="<job-name>", instance="<instance-id>"}: The configured sample_limit for a target. Returns zero if there is no limit configured.
3. scrape_body_size_bytes{job="<job-name>", instance="<instance-id>"}: The uncompressed size of the most recent scrape response, if successful. Scrapes failing because body_size_limit is exceeded report -1, other scrape failures report 0.

## Prometheus Server

`Querying Prometheus` - Prometheus provides a functional query language called PromQL (Prometheus Query Language) that lets the user select and aggregate time series data in real time.
When you send a query request to Prometheus, it can be an instant query, evaluated at one point in time, or a range query at equally-spaced steps between a start and an end time. PromQL works exactly the same in each cases; the range query is just like an instant query run multiple times at different timestamps.
In the Prometheus UI, the "Table" tab is for instant queries and the "Graph" tab is for range queries.
Other programs can fetch the result of a PromQL expression via the HTTP API.

`Expression language data types` - In Prometheus's expression language, an expression or sub-expression can evaluate to one of four types:

1. Instant vector - a set of time series containing a single sample for each time series, all sharing the same timestamp
2. Range vector - a set of time series containing a range of data points over time for each time series
3. Scalar - a simple numeric floating point value
4. String - a simple string value; currently unused

Depending on the use-case (e.g. when graphing vs. displaying the output of an expression), only some of these types are legal as the result of a user-specified expression. For instant queries, any of the above data types are allowed as the root of the expression. Range queries only support scalar-typed and instant-vector-typed expressions.

## Alerting Overview

Alerting with Prometheus is separated into two parts. Alerting rules in Prometheus servers send alerts to an Alertmanager. The Alertmanager then manages those alerts, including silencing, inhibition, aggregation and sending out notifications via methods such as email, on-call notification systems, and chat platforms.

The main steps to setting up alerting and notifications are:

1. Setup and configure the Alertmanager
2. Configure Prometheus to talk to the Alertmanager
3. Create alerting rules in Prometheus

The Alertmanager handles alerts sent by client applications such as the Prometheus server. It takes care of deduplicating, grouping, and routing them to the correct receiver integration such as email, PagerDuty, or OpsGenie. It also takes care of silencing and inhibition of alerts.

Core concepts the Alertmanager includes:-

- `Grouping` - Grouping categorizes alerts of similar nature into a single notification. This is especially useful during larger outages when many systems fail at once and hundreds to thousands of alerts may be firing simultaneously.
Example: Dozens or hundreds of instances of a service are running in your cluster when a network partition occurs. Half of your service instances can no longer reach the database. Alerting rules in Prometheus were configured to send an alert for each service instance if it cannot communicate with the database. As a result hundreds of alerts are sent to Alertmanager.

As a user, one only wants to get a single page while still being able to see exactly which service instances were affected. Thus one can configure Alertmanager to group alerts by their cluster and alertname so it sends a single compact notification.

Grouping of alerts, timing for the grouped notifications, and the receivers of those notifications are configured by a routing tree in the configuration file.

`Inhibition` - Inhibition is a concept of suppressing notifications for certain alerts if certain other alerts are already firing.
Example: An alert is firing that informs that an entire cluster is not reachable. Alertmanager can be configured to mute all other alerts concerning this cluster if that particular alert is firing. This prevents notifications for hundreds or thousands of firing alerts that are unrelated to the actual issue.

Inhibitions are configured through the Alertmanager's configuration file.

`Silences` - Silences are a straightforward way to simply mute alerts for a given time. A silence is configured based on matchers, just like the routing tree. Incoming alerts are checked whether they match all the equality or regular expression matchers of an active silence. If they do, no notifications will be sent out for that alert.
Silences are configured in the web interface of the Alertmanager.

`Client behavior` - The Alertmanager has special requirements for behavior of its client. Those are only relevant for advanced use cases where Prometheus is not used to send alerts.

`High Availability` - Alertmanager supports configuration to create a cluster for high availability. This can be configured using the --cluster-* flags.

It's important not to load balance traffic between Prometheus and its Alertmanagers, but instead, point Prometheus to a list of all Alertmanagers.

## Visualization

`Expression browser` - The expression browser is available at /graph on the Prometheus server, allowing you to enter any expression and see its result either in a table or graphed over time.
This is primarily useful for ad-hoc queries and debugging. For graphs, use Grafana or Console templates.

Grafana supports querying Prometheus. The Grafana data source for Prometheus is included since Grafana 2.5.0 (2015-10-28).

Installing - To install Grafana see the official Grafana documentation.
Using - By default, Grafana will be listening on <http://localhost:3000>. The default login is "admin" / "admin".
Creating a Prometheus data source - To create a Prometheus data source in Grafana:

1. Click on the "cogwheel" in the sidebar to open the Configuration menu.
2. Click on "Data Sources".
3. Click on "Add data source".
4. Select "Prometheus" as the type.
5. Set the appropriate Prometheus server URL (for example, <http://localhost:9090/>)
6. Adjust other data source settings as desired (for example, choosing the right Access method).
7. Click "Save & Test" to save the new data source.

Creating a Prometheus graph - Follow the standard way of adding a new Grafana graph. Then:

1. Click the graph title, then click "Edit".
2. Under the "Metrics" tab, select your Prometheus data source (bottom right).
3. Enter any Prometheus expression into the "Query" field, while using the "Metric" field to lookup metrics via autocompletion.
4. To format the legend names of time series, use the "Legend format" input. For example, to show only the method and status labels of a returned query result, separated by a dash, you could use the legend format string {{method}} - {{status}}.
5. Tune other graph settings until you have a working graph.

Importing pre-built dashboards from Grafana.com - Grafana.com maintains a collection of shared dashboards which can be downloaded and used with standalone instances of Grafana. Use the Grafana.com "Filter" option to browse dashboards for the "Prometheus" data source only.
You must currently manually edit the downloaded JSON files and correct the datasource: entries to reflect the Grafana data source name which you chose for your Prometheus server. Use the "Dashboards" → "Home" → "Import" option to import the edited dashboard file into your Grafana install.

`Console templates` - Console templates allow for creation of arbitrary consoles using the Go templating language. These are served from the Prometheus server.
Console templates are the most powerful way to create templates that can be easily managed in source control. There is a learning curve though, so users new to this style of monitoring should try out Grafana first.

Prometheus comes with an example set of consoles to get you going. These can be found at /consoles/index.html.example on a running Prometheus and will display Node Exporter consoles if Prometheus is scraping Node Exporters with a job="node" label.

The example consoles have 5 parts:

1. A navigation bar on top
2. A menu on the left
3. Time controls on the bottom
4. The main content in the center, usually graphs
5. A table on the right

The navigation bar is for links to other systems, such as other Prometheis 1, documentation, and whatever else makes sense to you. The menu is for navigation inside the same Prometheus server, which is very useful to be able to quickly open a console in another tab to correlate information. Both are configured in console_libraries/menu.lib.

The time controls allow changing of the duration and range of the graphs. Console URLs can be shared and will show the same graphs for others.

The main content is usually graphs. There is a configurable JavaScript graphing library provided that will handle requesting data from Prometheus, and rendering it via Rickshaw.

## Instrumenting

`Client libraries` - Before you can monitor your services, you need to add instrumentation to their code via one of the Prometheus client libraries. These implement the Prometheus metric types.
Choose a Prometheus client library that matches the language in which your application is written. This lets you define and expose internal metrics via an HTTP endpoint on your application’s instance: Go,Java or Scala,Python,Ruby,Rust

Unofficial third-party client libraries: Bash,C,C++,Common Lisp,Dart,Delphi,Elixir,Erlang,Haskell,Julia,Lua for Nginx,Lua for Tarantool.NET / C#,Node.js.OCaml,Perl,PHP,R
When Prometheus scrapes your instance's HTTP endpoint, the client library sends the current state of all tracked metrics to the server.

If no client library is available for your language, or you want to avoid dependencies, you may also implement one of the supported exposition formats yourself to expose metrics.

`Exporters and integrations` - There are a number of libraries and servers which help in exporting existing metrics from third-party systems as Prometheus metrics. This is useful for cases where it is not feasible to instrument a given system with Prometheus metrics directly (for example, HAProxy or Linux system stats).

## Infrastructure Monitoring

The entire world does not (yet) revolve around Prometheus, nor provide Prometheus metrics out of the box. Exporters are tools that let you translate metrics from other systems into a format that Prometheus understands.

`Node Exporter` - It exposes machine-level metrics, largely from your operating system’s kernel, such as CPU, memory, disk space, disk I/O, network bandwidth, and motherboard temperature. The Node exporter is used with Unix systems; Windows users should use the wmi_exporter instead.

The Node exporter is intended only to monitor the machine itself, not individual processes or services on it. Other monitoring systems often have what I like to call an uberagent; that is, a single process that monitors everything on the machine. In the Prometheus architecture each of your services will expose its own metrics, using an exporter if needed, which is then directly scraped by Prometheus. This avoids you ending up with uberagent as either an operational or performance bottleneck, and enables you to think in terms more of dynamic services rather than machines.

In the case of Linux, there are thousands of metrics on offer. Some are well documented and understood, such as CPU usage; others, like memory usage, have varied from kernel version to kernel version as the implementation has changed. You will even find metrics that are completely undocumented, where you would have to read the kernel source code to try and figure out what they do.

The Node exporter is designed to be run as a nonroot user, and should be run directly on the machine in the same way you run a system daemon like sshd or cron.

# Prometheus

- Is an open source system monitoring and alerting toolkit originally built at soundcloud. It collects and stores its metrics as time series data from configured targets,stores them in time-series database and provides powerful query features.
- It can monitor:
    1. Linux/ Windows servers
    2. Http Servers(Apache, Nginx)
    3. Single application
    4. Services e.g database

Prometheus provides:

1. Time-Series Database:-Stores metrics data in time-series format,with labels for easy identification.
2. PromQL:-A powerful query language used to query data and create complex calculations over time-series metrics
3. Alerting:-Built-in alerting capabilities for detecting anomalies or issues in your system
4. Pull-Based Architecture:-Prometheus scrapes metrics from endpoints (pull model) rather than relying on externl systems to push data
5. Self-Sufficient Monitoring:- Does not rely on external dependencies for data collection and alerting.

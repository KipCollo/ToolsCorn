# Logstash

Logstash is an open source tool designed to manage all of your server logs in a centralized location.
Logstash is an open source tool developed by Jordan Sissel, who currently works for Elastic. Logstash acts as a data pipeline through which it processes the data from multiple servers and systems. Logstash can take inputs from TCP/UDP protocols, files, and log management systems, such as syslog-ng, rsyslog, and many more tools in the field that server administrators install to analyze server events. Like Puppet and CFEngine, or with monitoring systems like Nagios, Graphite & Zabbix.

Logstash collects data from the different sources defined by using the configuration file. Logstash can process any type of logs that are being maintained, including Apache logs, MySQL logs, firewall logs, and error logs. The best part is that one can store logs from different nodes and services in a centralized place and analyze them there.

Logstash parses,transform and filters data as it passes through it.It can derive structure from unstructured data.Can anonymize peronal data or exclude entirely.Can do geo-location lookups.It can scale across many nodes.Absorbs throughput from load spikes.Guarantees at-least-once delivery.

Logstash’s key features:
1. Logstash is open source and free to use.
2. Logstash is lightweight.
3. Logstash is highly customizable.
4. Logstash is easy to configure.
5. Input and output plug-ins are readily available for Logstash.

## Setup

The servers that are running Logstash agents are called `shippers`. They send log events of your applications and services to the Logstash server.
The central Logstash server running services such as brokers, indexers, and storage interface with Kibana, which is a visualization tool.

## Installation

Before you start installing Logstash on your machines, you have to install Java, as Logstash is written in JRuby, and you must have a Java Development Kit (JDK) installed.


By default, Logstash stores all the logs in /var/log/logstash.

## How it works

The logstash event processing pipeline has three stages: inputs-> filter-> outputs.
Choose your stash:-

1. Analysis - Elasticsearch,Data stores(MongoDB,Riak)
2. Archiving - HDFS,S3.
3. Monitoring - Nagios,Gangila,Zabbix,Graphite,Datadog.
4. Alerting:- Watcher with Elasticsearch,Email,Pagerduty,IRC,SNS.

Filters:- Are intermdiary processing devices in the Logstash pipeline.You can combine filters wih conditionals to perfrm an action on an event if it meets certain criteria.
They includes:-

1. grok - parse and structure arbitrary texts.Best to parse unstructured log data into something structured and queryable.
2. mutate - perform general transformations on event fields.You can rename,remove,replace, and modify fields in your events.
3. drop - drop an event completely,eg debug events.
4. clone - make a copy of event,possibly adding or removing fields.
5. geoip - add information about geographical location of IP addresses(also displays amazing charts in kibana.)

Basic commands:-

```bash
./logstash -e `input{ stdin{} } output { stdout{} }`
```

```log
input{
   file{
      path => "/root/temp/inlog.log"
   }
}
output{
   file{
      path => "/root/temp/oulog.log"
   }
}
```

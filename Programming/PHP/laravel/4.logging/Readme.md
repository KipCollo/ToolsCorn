# Logging

Laravel provides robust logging services that allow you to log messages to files, the system error log, and even to Slack to notify your entire team.
Laravel logging is based on "channels". Each channel represents a specific way of writing log information. For example, the single channel writes log files to a single log file, while the slack channel sends log messages to Slack. Log messages may be written to multiple channels based on their severity.
Laravel utilizes the Monolog library, which provides support for a variety of powerful log handlers. Laravel makes it a cinch to configure these handlers, allowing you to mix and match them to customize your application's log handling.

`Configuration` - All of the configuration options that control your application's logging behavior are housed in the config/logging.php configuration file. This file allows you to configure your application's log channels, so be sure to review each of the available channels and their options.

By default, Laravel will use the stack channel when logging messages. The stack channel is used to aggregate multiple log channels into a single channel.
Each log channel is powered by a "driver". The driver determines how and where the log message is actually recorded. The following log channel drivers are available in every Laravel application. An entry for most of these drivers is already present in your application's config/logging.php configuration file, so be sure to review this file to become familiar with its contents:

1. custom - A driver that calls a specified factory to create a channel.
2. daily - A RotatingFileHandler based Monolog driver which rotates daily.
3. errorlog - An ErrorLogHandler based Monolog driver.
4. monolog - A Monolog factory driver that may use any supported Monolog handler.
5. papertrail- A SyslogUdpHandler based Monolog driver.
6. single - A single file or path based logger channel (StreamHandler).
7. slack - A SlackWebhookHandler based Monolog driver.
9. stack - A wrapper to facilitate creating "multi-channel" channels.
10. syslog - A SyslogHandler based Monolog driver.
# Nginx

A piece of software on a server,that handles HTTP requests.
A high performance web server and a reverse proxy server.
NGINX is a powerful web server and uses a non-threaded, event-driven architecture that enables it to outperform Apache if configured correctly. It can also do other important things, such as load balancing, HTTP caching, or be used as a reverse proxy.

Nginx has one master process and several worker processes. The main purpose of the master process is to read and evaluate configuration, and maintain worker processes. Worker processes do actual processing of requests. nginx employs event-based model and OS-dependent mechanisms to efficiently distribute requests among worker processes. The number of worker processes is defined in the configuration file and may be fixed for a given configuration or automatically adjusted to the number of available CPU cores.

NGINX Use Cases:-

- Web Server
- Proxy Server - (Load Balancing, Caching, Security,Compression)

1. NGINX as Web Server - One of nginx’s primary function is to serve static content delivery which includes HTML, CSS and JavaScript. When a user requests a web page, nginx locates and serves the necessary static content. It can also handle multiple requests concurrently, ensuring maximum performance under heavy load.
2. NGINX as Load Balancer - Positioned at the entry point, it distributes incoming web traffic across multiple servers. This approach ensures that no single server becomes a bottleneck, allowing requests to be served efficiently. The distribution of the load depends on the configured algorithm.
3. NGINX as Caching - Caching is another functionality of a proxy server. Caching is a process of storing data temporarily so that future requests for the same data can be served faster.As Nginx acts as reverse proxy that can cache response from the backend server.It stores these responses in a cached location in the server. When a client makes request, if the response is available, it will serve immediately. If not, Nginx forwards the request to backend server and caches the new response.
4. NGINX as Security - The proxy server acts as a single entry point that is publicly available, protecting all other web servers and minimizing their exposure. So one can focus on this one single entry point protecting. Nginx also handle SSL/TLS termination and encryption ensuring secure client and server communication. So when an encrypted data is sent to the proxy, even if attacker tries to intercept, they cannot read the message.
5. NGINX as Compression - Nginx with its compression capabilities can optimize this scenario by reducing the size and ensure faster load times. It sends response in chunks instead of sending the entire file at once.

```bash
nginx -v
```

## Nginx Configurations

The way nginx and its modules work is determined in the configuration file. By default, the configuration file is named nginx.conf and placed in the directory /usr/local/nginx/conf, /etc/nginx, or /usr/local/etc/nginx.

`worker_processes`:- Cntrols how many parallel processes Nginx spawns to handle client requests.Each worker process runs independently and can handle its own set of connections.Should be tuned accrding to the server's hardware(CPU cores) and expected traffic load.
auto - Nginx automatically detects the number of CPU cores available on the server and starts a corresponding number of worker nodes.

`worker_connections`:- Per work process.How many simultaneous connections can be opened.Default is 512.

```conf
worker_processes 1;

events {
    worker_connections 1024;
}

http {

}
```

contexts:- A few top-level directives,group together the directives that apply to different traffic types:

- events - General connection processing.
- http - HTTP traffic.
- mail - Mail traffic.
- stream - TCP and UDP traffic.

Directives placed outside of these contexts are said to be main contexts.

server - Defines how Nginx should handle requests for a particular domain or IP address.
`listen`:- The IP address and port on which the server will accept requests.
`location`:- Defines how server should process specific types of requests and specify the location that contains your files.The root(/) URL, will apply to all requests unless more specific location block are applied.
`server names`:- Server names are defined using the server_name directive and determine which server block is used for a given request.Which domain or IP address this server block should respond to.
They may be defined using exact names, wildcard names, or regular expressions:

```conf
server {
    listen       80;
    server_name  example.org  www.example.org;
    location /{
        proxy_pass
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote-addr;
    }
    ...
}

server {
    listen       80;
    server_name  *.example.org;
    ...
}

server {
    listen       80;
    server_name  mail.*;
    ...
}

server {
    listen       80;
    server_name  ~^(?<user>.+)\.example\.net$;
    ...
}
```

`upstream`:- Refers to servers that Nginx forwards requests to."upstream" name is based on the flow of data.
- upstream servers refers to traffic going from a client toward the source or higher-level infra,in this case application server.
- Downstream servers refers to traffic going back to the client

```conf
upstream nodejs_cluster {
    server 127.0.0.1:3001;
}
```

To start nginx, run the executable file. Once nginx is started, it can be controlled by invoking the executable with the -s parameter. Use the following syntax:

```bash
nginx -s signal
```

Where signal may be one of the following:

1. stop — fast shutdown
2. quit — graceful shutdown
3. reload — reloading the configuration file
4. reopen — reopening the log files

Once the master process receives the signal to reload configuration, it checks the syntax validity of the new configuration file and tries to apply the configuration provided in it. If this is a success, the master process starts new worker processes and sends messages to old worker processes, requesting them to shut down. Otherwise, the master process rolls back the changes and continues to work with the old configuration. Old worker processes, receiving a command to shut down, stop accepting new connections and continue to service current requests until all such requests are serviced. After that, the old worker processes exit.

A signal may also be sent to nginx processes with the help of Unix tools such as the kill utility. In this case a signal is sent directly to a process with a given process ID. The process ID of the nginx master process is written, by default, to the nginx.pid in the directory /usr/local/nginx/logs or /var/run. For example, if the master process ID is 1628, to send the QUIT signal resulting in nginx’s graceful shutdown, execute:

```bash
kill -s QUIT 1628
```

For getting the list of all running nginx processes, the ps utility may be used, for example, in the following way:

```bash
ps -ax | grep nginx
```

`Configuration File’s Structure`:- nginx consists of modules which are controlled by directives specified in the configuration file.
Directives are divided into simple directives and block directives. A simple directive consists of the name and parameters separated by spaces and ends with a semicolon (;). A block directive has the same structure as a simple directive, but instead of the semicolon it ends with a set of additional instructions surrounded by braces ({ and }). If a block directive can have other directives inside braces, it is called a context (examples: events, http, server, and location).

Directives placed in the configuration file outside of any contexts are considered to be in the main context. The events and http directives reside in the main context, server in http, and location in server.

The rest of a line after the # sign is considered a comment.

## Serving Static Content



# nGINX

A piece of software on a server,that handles HTTP requests.
A high performance web server and a reverse proxy server.
NGINX is a powerful web server and uses a non-threaded, event-driven architecture that enables it to outperform Apache if configured correctly. It can also do other important things, such as load balancing, HTTP caching, or be used as a reverse proxy.

- **NGINX** is an open-source, high-performance web server that also functions as:
    - A reverse proxy
    - Load balancer
    - HTTP cache
    - Mail proxy

It is designed for high concurrency, performance, and low memory usage — making it ideal for modern DevOps and cloud environments.

Nginx has one master process and several worker processes. The main purpose of the master process is to read and evaluate configuration, and maintain worker processes. Worker processes do actual processing of requests. nginx employs event-based model and OS-dependent mechanisms to efficiently distribute requests among worker processes. The number of worker processes is defined in the configuration file and may be fixed for a given configuration or automatically adjusted to the number of available CPU cores.

Nginx integrates with existing web technologies such as Apache web server and PHP.
NGINX Use Cases:-

- Web Server
- Proxy Server - (Load Balancing, Caching, Security,Compression)

1. NGINX as Web Server - One of nginx’s primary function is to serve static content delivery which includes HTML, CSS and JavaScript. When a user requests a web page, nginx locates and serves the necessary static content. It can also handle multiple requests concurrently, ensuring maximum performance under heavy load.
2. NGINX as Load Balancer - Positioned at the entry point, it distributes incoming web traffic across multiple servers. This approach ensures that no single server becomes a bottleneck, allowing requests to be served efficiently. The distribution of the load depends on the configured algorithm.
3. NGINX as Caching - Caching is another functionality of a proxy server. Caching is a process of storing data temporarily so that future requests for the same data can be served faster.As Nginx acts as reverse proxy that can cache response from the backend server.It stores these responses in a cached location in the server. When a client makes request, if the response is available, it will serve immediately. If not, Nginx forwards the request to backend server and caches the new response.
4. NGINX as Security - The proxy server acts as a single entry point that is publicly available, protecting all other web servers and minimizing their exposure. So one can focus on this one single entry point protecting. Nginx also handle SSL/TLS termination and encryption ensuring secure client and server communication. So when an encrypted data is sent to the proxy, even if attacker tries to intercept, they cannot read the message.
5. NGINX as Compression - Nginx with its compression capabilities can optimize this scenario by reducing the size and ensure faster load times. It sends response in chunks instead of sending the entire file at once.


**NGINX vs Apache (Why DevOps Prefer NGINX)**:-

| Feature         | NGINX                          | Apache                      |
|-----------------|--------------------------------|-----------------------------|
| Architecture    | Event-driven (asynchronous)    | Process/thread-based        |
| Performance     | High concurrency, fast         | Slower with many connections|
| Memory usage    | Low                            | High                        |
| Static content  | Extremely fast                 | Good                        |
| Config format   | Simple, declarative            | More flexible but complex   |
| Use cases       | Web server, reverse proxy, LB  | Traditional web server      |


**Common DevOps Use Cases for NGINX**:-

| Use Case                             | Example                                                                 |
|--------------------------------------|-------------------------------------------------------------------------|
| Web server                           | Serving static React/Angular apps                                      |
| Reverse proxy                        | Forwarding requests to backend apps (Node.js, Python, Java)            |
| Load balancer                        | Distributing load between multiple backend servers                     |
| SSL termination                      | Handling HTTPS at the edge                                             |
| Caching                              | Reducing load on upstream services                                     |
| Ingress controller (Kubernetes)      | Managing traffic inside Kubernetes clusters                            |
| Rate limiting & security enforcement | Protecting APIs from abuse or bots                                     |


## Installing Nginx

It is strongly recommended that you use prebuilt binary packages of Nginx if they are available in your distribution. This ensures best integration of Nginx with your system and reuse of best practices incorporated into the package by the package maintainer.Prebuilt binary packages of Nginx automatically maintain dependencies for you and package maintainers are usually fast to include security patches, so you don't get any complaints from security officers. In addition to that, the package usually provides a distribution-specific startup script, which doesn't come out of the box.


`Installing Nginx on Ubuntu`:- The Ubuntu Linux distribution contains a prebuilt package for Nginx. To install it,simply run the following command:

```sh
sudo apt-get install nginx
```

The preceding command will install all the required files on your system, including the logrotate script and service autorun scripts. The following table describes the Nginx installation layout that will be created after running this command as well as the purpose of the selected files and folders:

1. Nginx configuration files - /etc/nginx
2. Main configuration file - /etc/nginx/nginx.conf
3. Virtual hosts configuration files (including default one) - /etc/nginx/sites-enabled
4. Custom configuration files - /etc/nginx/conf.d
5. Log files (both access and error log) - /var/log/nginx
6. Temporary files - /var/lib/nginx
7. Default virtual host files - /usr/share/nginx/html

Default virtual host files will be placed into /usr/share/nginx/html. Please keep in mind that this directory is only for the default virtual host. For deploying your web application, use folders recommended by Filesystem Hierarchy Standard (FHS)

```bash
sudo yum install epel-release -y
sudo yum install nginx -y
```

```bash
docker run --name nginx -p 8080:80 -d nginx
```

```bash
nginx -v
```

For each installation method, we have a set of generic locations and default paths.

| File/Directory        | Purpose                                      |
|-----------------------|----------------------------------------------|
| `/etc/nginx/nginx.conf` | Main configuration file                     |
| `/etc/nginx/sites-available/` | Stores virtual host (server block) configs |
| `/etc/nginx/sites-enabled/`   | Symlinks to active site configs         |
| `/var/www/html`       | Default web root directory                   |
| `/var/log/nginx/`     | Contains access and error logs               |


`The Nginx configuration folder`:- This folder contains the main configuration file and a set of parameter files. The following table describes the purpose of each of the default parameter files:

1. mime.types - This contains the default MIME type map for converting file extensions into MIME types.
2. fastcgi_params - This contains the default FastCGI parameters required for FastCGI to function.
3. scgi_params - This contains the default SCGI parameters required for SCGI to function.
4. uwsgi_params - This contains the default UWCGI parameters required for UWCGI to function.
5. proxy_params - This contains the default proxy module parameters. This parameter set is required for certain web servers when they are behind Nginx, so that they can figure out they are behind a proxy.
6. naxsi.rules (optional) - This is the main rule set for the NAXSI web application firewall module.
7. koi-utf, koi-win, and win-utf - These are the Cyrillic character set conversion tables.


## Nginx Configurations

The way nginx and its modules work is determined in the configuration file. By default, the configuration file is named nginx.conf and placed in the directory /usr/local/nginx/conf, /etc/nginx, or /usr/local/etc/nginx.
The NGINX configuration file follows a very logical format.

The basic NGINX configuration file is set up in a number of sections. Each section is delineated in the following way:

```conf
<section> {
    <directive> <parameters>;
}
```

Each directive line ends with a semicolon (;). This marks the end-of-line. The curly braces ({}) actually denote a new configuration context(sections).


**Variables**:- Variables are named objects that can be assigned a textual value. Variables can only appear inside the http section. A variable is referred to by its name, prefixed by the dollar ($) symbol. Alternatively, a variable reference can enclose a variable name in curly brackets to prevent merging with surrounding text.
Variables can be used in any directive that accepts them, as shown here:

```conf
proxy_set_header Host $http_host;
proxy_set_header Host ${http_host};
proxy_set_header Host ${http_host}_squirrel;
```

There are also special variable names:

- Variables from $1 to $9 refer to the capture arguments in the regular expressions, as shown here:

```conf
location ~ /(.+)\.php$ {
    [...]
    proxy_set_header X-Script-Name $1;
}
```

The preceding configuration will set the HTTP header X-Script-Name in the forwarded request to the name of the PHP script in the request URI. The captures are specified in a regular expression using round brackets.

- Variables that start with $arg_ refer to the corresponding query argument in the original HTTP request, as shown here:

```conf
proxy_set_header X-Version-Name $arg_ver;
```

The preceding configuration will set the HTTP header X-Version-Name in the forwarded request to the value of the ver query argument in the original request.

- Variables that start with $http_ refer to the corresponding HTTP header line in the original request.
- Variables that start with $sent_http_ refer to the corresponding HTTP header line in the outbound HTTP request.
- Variables that start with $upstream_http_ refer to the corresponding HTTP header line in the response received from an upstream.
- Variables that start with $cookie_ refer to the corresponding cookie in the original request.
- Variables that start with $upstream_cookie_ refer to the corresponding cookie in the response received from an upstream.


**Inclusions**:- Any Nginx configuration section can contain inclusions of other files via the include directive. This directive takes a single argument containing a path to a file to be included.

```conf
include mime.types;
include /etc/nginx/conf/site-defaults.conf;
```

Once specified, the include directive instructs Nginx to process the contents of the file or files specified by the argument of this directive as if they were specified in place of the include directive.
Relative paths are resolved with respect to the path of the configuration file the directive is specified in. This is good to keep in mind when the include directive is specified in another included file, such as when a virtual host configuration file contains a relative include directive.

The include directive can also contain a globbed path with wild cards, either relative or absolute.

```conf
include /etc/nginx/sites-enabled/*.conf;
```

**Sections**:- A section is a directive that encloses other directives in its block. Each section's delimiters must be located in the same file, while the content of a section can span multiple files via the include directive.

`The http section`:- The http section enables and configures the HTTP service in Nginx. It has the server and upstream declarations. As far as individual directives are concerned, the http section usually contains those that specify defaults for the entire HTTP service.
The http section must contain at least one server section in order to process HTTP requests. Here is a typical layout of the http section:

```conf
http {
    [...]
    server {
        [...]
    }
}
```


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


## NGINX as a Web Server

A *web server* is software that serves static files (like `.html`, `.css`, `.js`, `.png`) over HTTP.When users visit your website, the web server responds with these files.
NGINX is one of the fastest and most popular web servers used for this purpose.

Default Web Root in Linux - 

| Directory             | Purpose                          |
|-----------------------|----------------------------------|
| `/var/www/html`       | Default directory for static files |
| `/etc/nginx/sites-available/default` | Default config file pointing to the web root |

```nginx
server {
    listen 80;
    server_name localhost;

    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Run NGINX Docker container:

```bash
docker run --name web-nginx -v $PWD:/usr/share/nginx/html:ro -p 8080:80 -d nginx
```

**Root vs Alias**:- These two directives behave differently inside `location` blocks.

`root` example:-

```nginx
location /static/ {
    root /data/www;
}
# /static/img.png → /data/www/static/img.png
```

`alias` example:-

```nginx
location /static/ {
    alias /data/www/;
}
# /static/img.png → /data/www/img.png
```

Use `alias` when you want to replace the URI path.

Common Errors & Fixes

| Error                             | Solution                                 |
|----------------------------------|------------------------------------------|
| 403 Forbidden                    | Check file permissions (use `chmod`/`chown`) |
| 404 Not Found                    | Ensure correct `root` or `alias`         |
| NGINX not reloading changes     | Use `sudo nginx -s reload` or restart NGINX |
| Port already in use             | Use `sudo lsof -i :80` to identify process |


## NGINX as a Reverse Proxy (Ubuntu/Linux)

A *reverse proxy* is a server that receives client requests and forwards them to backend servers, then sends the response back to the client.
NGINX is one of the most popular tools used as a reverse proxy in production.

Reverse Proxy vs Forward Proxy:-

| Feature         | Forward Proxy                       | Reverse Proxy                           |
|-----------------|--------------------------------------|------------------------------------------|
| Who configures it | Client                              | Server-side                              |
| Forwards requests to | External servers (internet)         | Internal backend servers (apps/services) |
| Use case         | Browsing anonymously, caching       | Load balancing, SSL termination, API gateway |
| Example          | Proxy server for office users       | NGINX between frontend and backend apps  |\\

Why Use NGINX as a Reverse Proxy:-

- Protect backend services from direct access
- Centralized SSL termination
- Load balancing backend apps
- Path-based routing (`/api` → backend1, `/app` → backend2)
- Easy caching and compression

Reverse Proxy Configuration (Ubuntu/Linux)

File: `/etc/nginx/sites-available/default`

Update the existing `server` block or create a new one:

```nginx
server {
    listen 80;
    server_name localhost;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

- `proxy_pass` → forwards requests to your backend app
- `proxy_set_header` → preserves original request metadata (like IP and host)


Reverse Proxy to a Node.js App
Step 1: Install Node.js (optional if using your own backend)

```bash
sudo apt update
sudo apt install nodejs npm -y
```

Step 2: Create a simple backend app

```bash
mkdir ~/node-backend && cd ~/node-backend
nano server.js
```

Paste this:

```js
const http = require('http');
http.createServer((req, res) => {
  res.end('Hello from Node.js backend!');
}).listen(3000);
```

Run it:
```bash
node server.js
```

> Your app is now running at `http://localhost:3000`

Step 3: Configure NGINX as reverse proxy
Edit the NGINX default site:

```bash
sudo nano /etc/nginx/sites-available/default
```

Replace the `location / {}` block with:

```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
}
```

Step 4: Test and reload NGINX - Check config for syntax errors:

```bash
sudo nginx -t
```

Reload NGINX:
```bash
sudo systemctl reload nginx
```

Step 5: Test in browser

Visit:

```
http://localhost
```

You should see: `Hello from Node.js backend!`

---

## 📁 File Structure Recap (Ubuntu)

| Path                              | Purpose                                |
|-----------------------------------|----------------------------------------|
| `/etc/nginx/nginx.conf`           | Global NGINX settings                   |
| `/etc/nginx/sites-available/default` | Active site config for reverse proxy   |
| `/var/www/html`                   | Not used in reverse proxy               |
| `/var/log/nginx/access.log`       | Logs all requests                       |



- NGINX can proxy traffic to backend apps using `proxy_pass`.
- Config changes go in `/etc/nginx/sites-available/default` (on Ubuntu).
- Always test config and reload NGINX after changes.
- Ideal for API gateways, internal routing, and SSL termination.



## Load Balancing with NGINX (Ubuntu/Linux)

Use NGINX to distribute traffic across multiple backend servers — improving availability, reliability, and scalability of your applications.
*Load balancing* is the process of distributing incoming network traffic across multiple backend servers.

Benefits:
- Prevents server overload
- Increases availability and fault tolerance
- Enables horizontal scaling

NGINX supports multiple load balancing algorithms out of the box.

**Load Balancing Algorithms in NGINX**:-

| Algorithm         | Behavior                                                               |
|-------------------|-------------------------------------------------------------------------|
| `round-robin`     | Default — rotates through all backends equally                         |
| `least_conn`      | Sends traffic to the backend with the fewest active connections         |
| `ip_hash`         | Uses client IP to consistently route requests to the same backend       |


**Basic Load Balancer Configuration**:-

Edit:
```bash
sudo nano /etc/nginx/sites-available/default
```

Replace contents with:

```nginx
upstream backend_app {
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
}

server {
    listen 80;
    server_name localhost;

    location / {
        proxy_pass http://backend_app;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

---

## 🧪 Demo: Load Balance Two Local Backend Servers

### Step 1: Create Backend Servers

We'll run two simple HTTP servers using Node.js.

#### Create script:
```bash
mkdir ~/load-test && cd ~/load-test
```

**server1.js**
```js
require('http').createServer((req, res) => {
  res.end('Response from Server 1');
}).listen(3001);
```

**server2.js**
```js
require('http').createServer((req, res) => {
  res.end('Response from Server 2');
}).listen(3002);
```

### Step 2: Run both servers
```bash
node server1.js &
node server2.js &
```

---

### Step 3: Reload NGINX

```bash
sudo nginx -t
sudo systemctl reload nginx
```

### Step 4: Test the Load Balancer

Open a browser or use curl:

```bash
curl http://localhost
```

Run it multiple times — you should see the response alternate between:

```
Response from Server 1
Response from Server 2
```

✅ You’ve just created a working load balancer using NGINX!

---

## 🔄 Switching Load Balancing Methods

### Use Least Connections
```nginx
upstream backend_app {
    least_conn;
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
}
```

### Use IP Hash
```nginx
upstream backend_app {
    ip_hash;
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
}
```

---



# 🔒 Section 5: SSL/TLS Setup in NGINX Using a Self-Signed Certificate (Ubuntu/Linux)

## 🎯 Goal

Secure your application with HTTPS using a **self-signed SSL certificate**.  
This is ideal for **local development**, **internal tools**, and **non-public test environments**.

---

## 🧠 Why Use HTTPS (Even in Dev)?

- Encrypts traffic between client and server
- Simulates production-like environment for testing
- Helps catch mixed-content issues early
- Required by modern frontend frameworks and APIs

---

## 🛠️ Step-by-Step: Create a Self-Signed Certificate

### Step 1: Generate SSL Certificate and Key

```bash
sudo openssl req -x509 -nodes -days 365 \
 -newkey rsa:2048 \
 -keyout /etc/ssl/private/nginx-selfsigned.key \
 -out /etc/ssl/certs/nginx-selfsigned.crt
```

When prompted:
- Common Name (CN): use `localhost` or your server’s IP

---

### Step 2: Update NGINX Configuration

Edit the default site config:
```bash
sudo nano /etc/nginx/sites-available/default
```

Replace with the following:

```nginx
server {
    listen 443 ssl;
    server_name localhost;

    ssl_certificate /etc/ssl/certs/nginx-selfsigned.crt;
    ssl_certificate_key /etc/ssl/private/nginx-selfsigned.key;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}

# Optional: Redirect HTTP to HTTPS
server {
    listen 80;
    server_name localhost;
    return 301 https://$host$request_uri;
}
```

---

### Step 3: Reload NGINX

Check and reload configuration:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

### Step 4: Test HTTPS Locally

Open your browser and visit:

```
https://localhost
```

⚠️ You will see a warning:  
> "Your connection is not private"

✅ That’s expected with self-signed certs. Proceed anyway to view your site securely.

---

## 📁 SSL File Paths Recap

| Path                                         | Purpose               |
|----------------------------------------------|------------------------|
| `/etc/ssl/certs/nginx-selfsigned.crt`        | SSL certificate        |
| `/etc/ssl/private/nginx-selfsigned.key`      | Private key            |
| `/etc/nginx/sites-available/default`         | HTTPS proxy config     |

---

## 🧪 Bonus: Test Without Browser (curl)

```bash
curl -k https://localhost
```

> `-k` allows insecure (self-signed) HTTPS connections.

---

## ✅ Summary

- Self-signed SSL is perfect for secure local development.
- Requires only OpenSSL and a few lines in NGINX.
- Always test your HTTPS setup with curl and browser.
- In production, switch to Let’s Encrypt or trusted CAs.


Think of Nginx (pronounced "Engine-X") as a Traffic Controller for your website or app.Right now, you have a bunch of small "shops" (microservices) like a cart service, an order service, and a search service. Instead of customers going directly to each shop's back door, they all go to one main entrance: Nginx.Here is a breakdown of what that configuration file is doing, step-by-step:1. The "Server Name" (The Address)Each server { ... } block is like a different building.When someone types api.yas.local, Nginx looks at the first block.When someone types grafana, it looks at a different block.It uses the URL to decide which rules to follow.2. The "Location" (The Department)Inside a building, you have different departments.location /cart/ tells Nginx: "If the user asks for anything starting with /cart, send them to the Cart service."location /order/ sends them to the Order service.3. "proxy_pass" (The Hand-off)The command proxy_pass http://cart; is the most important part. It tells Nginx:"I’m not going to handle this request myself. I’m going to pass it over to the 'Cart' computer running in the background."The user never sees the internal computer; they only see Nginx.4. The "Resolver" (The Map)You see the number 127.0.0.11 a lot. In Docker (where your services likely live), this is the Internal Phonebook.Nginx uses this to look up the name "cart" or "inventory" and find out which internal IP address that service is currently using.5. Customizing the "Headers" (The Sticky Notes)In the identity section, you see lines like proxy_set_header X-Real-IP $remote_addr;.This is like Nginx taking the customer's request and sticking a Post-it note on it before handing it to the service. The note says: "Hey, the person who actually asked for this is at this IP address, not me." This helps the service know who the real user is.SummaryYour file is basically a routing map. It says:Listen for specific web addresses.Look at which specific page or folder the user wants.Forward that request to the correct internal service so the user gets the right data.Does this "Traffic Controller" analogy make sense, or would you like to dive deeper into why we use Nginx instead of just connecting directly?yesMoving from a single website to a "traffic controller" (Nginx) setup is a big step, but it’s done for three very practical reasons:1. One "Front Door" (Security & Simplicity)Imagine you have 15 different services (Cart, Order, Search, etc.). Without Nginx, you would have to open 15 different "doors" (ports) on your server to the internet.Without Nginx: A hacker has 15 targets to attack.With Nginx: You lock all the back doors and only open one door (Nginx). Nginx checks the ID of anyone coming in before passing them to the services inside.2. Hiding the "Messy" Interior (Abstraction)Your internal services might be running on weird addresses like 172.18.0.5:8080. You don't want your customers to see that.Nginx acts as a mask. The user sees a nice, clean URL like api.yas.local/order, and Nginx does the hard work of finding where that order service is actually hiding.3. Efficiency (The "Speedy Secretary")Nginx is incredibly fast at doing "small" tasks so your main app doesn't have to:Static Files: If a user wants a simple image or a CSS file, Nginx can hand it to them directly without even bothering the main application.SSL (The Lock Icon): Nginx handles the heavy encryption math for HTTPS. This lets your microservices focus entirely on their jobs (like processing a payment) without worrying about security encryption.4. High Availability (The "Backup Plan")Even though it's not in your current file yet, Nginx can do Load Balancing. If your "Order" service gets too busy, you can run three copies of it. Nginx will automatically send the next customer to whichever one isn't busy. If one service crashes, Nginx simply stops sending people there until it's fixed.Analogy:Think of Nginx as the Receptionist at a large doctor's office.The patients (users) only talk to the receptionist.The receptionist checks their insurance (Security).The receptionist tells them which room to go to (Routing).The doctors (Microservices) never have to answer the phone; they just focus on treating the patients.Do you want to try making a small change to this file to see how it works, or should we look at one of the specific services (like identity) to see how it handles logins?I have built a web application in springboot on port 8080,It uses templating engine so no need of spa.How do i make it accessible using ec2 serverTo make your Spring Boot application (port 8080) accessible on an EC2 server, you need to follow these three main steps:1. Open the Security "Door" (AWS Console)By default, AWS blocks all traffic to your EC2 instance except for SSH. You must tell AWS to allow visitors to see your app.Go to the EC2 Dashboard and select your instance.Click the Security tab and click on your Security Group.Click Edit inbound rules and add a new rule:Type: Custom TCPPort Range: 8080Source: 0.0.0.0/0 (This means "anyone on the internet")2. Move your Code to EC2You need to get your .jar file from your computer onto the EC2 server.On your computer: Run ./mvnw clean package (or mvn clean package) to create your .jar file in the /target folder.Upload the file: Use the scp command from your terminal to send the file:bashscp -i your-key.pem target/your-app.jar ec2-user@your-ec2-ip:/home/ec2-user/
Use code with caution.(Replace your-key.pem and your-ec2-ip with your actual file and IP address).3. Run the App in the BackgroundConnect to your EC2 via SSH (ssh -i your-key.pem ec2-user@your-ip) and install Java if you haven't yet. To keep your app running even after you close your laptop, use the nohup command:bashnohup java -jar your-app.jar > app.log 2>&1 &
Use code with caution.nohup: Tells the server "don't stop this when I hang up".&: Tells it to run in the "background" so you can keep using your terminal.Success! You can now visit your app at http://your-ec2-ip:8080 in your browser.Pro Tip (The "Cleaner" Way):Since you are already learning about Nginx, most professionals set it up so users just type http://your-ip (Port 80) and Nginx "forwards" that request internally to your Spring Boot app on 8080. This keeps your app more secure and gives you a professional-looking URL.Would you like the Nginx configuration to hide that :8080 from your users?10 sitesDeploy Your Spring Boot JAR to Amazon EC2 - Medium5 Mar 2026 — What You'll Need. Before we start, make sure you have: * A Spring Boot JAR file (e.g., ********-0.0. 1-SNAPSHOT. jar ) * An AWS ac...Medium·Spring Boot SimplifiedStep-by-Step Guide to Deploying a Spring Boot Application on ...28 Dec 2024 — Launching an EC2 instance. 1. Access the AWS Management Console and search for EC2. 2. Click "Launch Instance" to configure the fo...AWS Builder CenterDeploying a Spring Boot Application to an Amazon EC2 ...15 Sept 2023 — Generate the JAR file of the spring boot application. ... Change the terminal current directory to your project's directory and ru...Medium·Priya SharmaShow allso to make an application that uses app server to web app you use a web serverSomething went wrong and the content wasn't generated.so to make an application that uses app server to web app you use a web serverExactly. You’ve got the concept perfectly.In a professional setup, you use a Web Server (like Nginx) as the "front man" and your App Server (Spring Boot) as the "worker" in the back.Here is why that "Web Server → App Server" combo is the standard:1. Port 80 vs. Port 8080Web Server: By default, the internet uses Port 80 (HTTP) or Port 443 (HTTPS). When you type google.com, your browser assumes Port 80.App Server: Spring Boot defaults to Port 8080.The Bridge: Nginx sits on Port 80, catches the visitors, and quietly hands them to Spring Boot on 8080. The user never has to type :8080 at the end of the URL.2. Handling the "Heavy Lifting"Spring Boot is great at logic (databases, users, math), but it's not the fastest at serving images or CSS files.Nginx is specialized for speed. It can hand out your images/styles instantly and only bother Spring Boot when there is actual "thinking" (logic) to do.3. What the Nginx config would look like for you:If you installed Nginx on that same EC2, your configuration would look very simple:nginxserver {
    listen 80;
    server_name your-ec2-public-ip;

    location / {
        proxy_pass http://localhost:8080;  # This sends Port 80 traffic to your App
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
Use code with caution.Summary of the "Chain":User → (Internet) → Nginx (Web Server) → (Internal) → Spring Boot (App Server)Does that help clarify why you see both "Web" and "App" servers used together?(Internal)When we say (Internal), we mean a conversation happening inside the same computer (the EC2 instance).Think of it like a restaurant:The Internet: The street outside.Nginx (Web Server): The Waiter standing at the front door.Spring Boot (App Server): The Chef in the kitchen.The "Internal" part is the waiter walking from the front door to the kitchen to hand over the order.Why is "Internal" better?It's Private: The Chef (Spring Boot) doesn't have to talk to anyone on the street. He only talks to the Waiter. In technical terms, you can close port 8080 to the public and only allow Nginx to talk to it.It's Fast: Because Nginx and Spring Boot are on the same "machine," they talk to each other almost instantly using a special address called localhost (which is like a computer talking to itself).Safety: If someone tries to "flood" your site with fake traffic, Nginx catches it at the door. Your Spring Boot app stays calm and protected in the back.The Result: To the person on the street, they just see a restaurant. They don't need to know how the kitchen is organized; they just get their food.Would you like to know how to set up Nginx on your EC2 so it can start talking to your Spring Boot app internally?what if i change the port to 80If you change your Spring Boot port to 80, you are essentially telling the Chef to stand at the Front Door.Technically, it works! Your app would be accessible at http://your-ec2-ip without any extra setup. However, there are three big reasons why most people still don't do this:1. The "Root" Problem (Security)On Linux (like your EC2), any port below 1024 is considered a "privileged port."To run your app on Port 80, you would have to run Spring Boot as the Root User (the "Super Admin").The Risk: If a hacker finds a tiny bug in your Java code, they suddenly have "Root" access to your entire server.The Nginx Way: Nginx is designed to start as Root, grab Port 80, and then immediately switch to a "safe" user. It acts as a protective shield.2. No "Shield" for TrafficIf your Spring Boot app is directly on Port 80:Crashing: If your Java app crashes or needs a 30-second restart, the website just dies with a "Connection Refused" error. Nginx, however, can stay up and show a nice "We'll be right back" page.Overload: Spring Boot is heavy. If 1,000 bots hit your site at once, they hit your App Logic immediately. Nginx is "lightweight" and can block those bots before they ever wake up your Java code.3. SSL (The Green Lock)Someday you'll want your site to be https:// (encrypted).Setting up SSL certificates inside Spring Boot is a bit of a headache.Setting up SSL in Nginx is incredibly easy and industry-standard.SummaryCan you do it? Yes. Just change server.port=80 in your application.properties and run it with sudo.Should you? For a quick school project, sure. For anything you want people to actually use, it's better to keep Spring Boot on 8080 and let Nginx handle the "Front Door" on 80.


If you are using Namecheap's Shared Hosting (via cPanel), the reason your Next.js app is accessible on the internet despite running on port 3000 is that Namecheap's internal system is acting as an automatic proxy for you.Here is what is happening behind the scenes:1. The "Setup Node.js App" ToolWhen you use Namecheap's Setup Node.js App tool in cPanel, it uses a technology called Phusion Passenger.How it works: Passenger is a "manager" that sits between the outside world and your Next.js code.The Hand-off: Even if your code says listen(3000), Passenger ignores that physical port and intercepts the web traffic coming in from the main domain URL you selected in cPanel.2. Automatic Port ManagementOn shared hosting, many people are on the same server. If everyone tried to use port 3000, the server would crash.Namecheap's system assigns a random internal port or a Unix socket to your specific app.The "Frontend" (the main server address) knows exactly which internal port belongs to your domain and sends the traffic there automatically.3. Why This Is Different From Your EC2On EC2: You are the "Manager." You have to manually install Nginx and tell it to point Port 80 to Port 8080.On Namecheap Shared Hosting: Namecheap is the "Manager." Their pre-configured web server (usually Apache or LiteSpeed) is already set up to act as a reverse proxy for any Node.js app you create through their dashboard.How to Check Your Specific SetupIf you want to see how your app is actually connecting, look for a file called server.js or your package.json in the Namecheap File Manager. Often, developers use a custom server.js to ensure the app listens to the environment's assigned port rather than a hardcoded "3000".


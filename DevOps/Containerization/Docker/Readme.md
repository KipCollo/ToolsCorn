# Docker

Docker is an open source platform that automates deployment, scaling and management of applications by isolating them into lightweight and portable containers.It provides developers and admins with set of tools and APIs to manage containerized apps.You build and package app code, libraries and dependencies into a container image, which can be distributed and run consistently in any environment that support docker

Docker is an open-source platform that automates the deployment, scaling, and management of applications by isolating them into lightweight, portable containers. Containers are standalone executable units that encapsulate all necessary dependencies, libraries, and configuration files required for an application to run consistently across various environments.

Docker provides tooling and a platform to manage the lifecycle of your containers:

- Develop your application and its supporting components using containers.
- The container becomes the unit for distributing and testing your application.
- When you're ready, deploy your application into your production environment, as a container or an orchestrated service. This works the same whether your production environment is a local data center, a cloud provider, or a hybrid of the two.

## Docker importance

1. Build and test in exactly same environment.
2. Same development environments with employees working on same project
3. Switching between projects should not cause clash.

## Steps

- Step 01 - Docker and DevOps - Installation and Introduction
- Step 02 - Your First Docker Use-case
- Step 03 - Important Docker Concepts - Registry, Repository, Tag, Image and Container
- Step 04 - Playing with Docker Images - Java, JavaScript and Python
- Step 05 - Playing with Docker - Detached Mode and Logs
- Step 06 - Playing with Docker Images and Containers
- Step 07 - Understanding Docker Architecture - Docker Client, Docker Engine
- Step 08 - Understanding Docker Popularity - My 3 Top Reasons
- Step 09 - Learning Docker Images - Commands
- Step 10 - Learning Docker Containers - Commands
- Step 11 - Learning Docker Commands - system and stats
- Step 12 - Building Docker Images for Python Application
- Step 13 - Understanding creation of Docker Images in Depth
- Step 14 - Pushing Python App Docker Image to Docker Hub
- Step 15 - Building and Pushing Docker Image for Node JavaScript App
- Step 16 - Building and Pushing Docker Image for Java Application
- Step 17 - Building Efficient Docker Images - Improving Layer Caching
- Step 18 - Understanding ENTRYPOINT vs CMD
- Step 19 - Docker and Microservices - Quick Start
- Step 20 - Introduction to Microservices - CE and CC
- Step 21 - Running Microservices as Docker Containers
- Step 22 - Using Docker Link to Connect Microservices
- Step 23 - Using Custom Networking to Connect Microservices
- Step 24 - Using Docker Compose to Simplify Microservices Launch
- Step 25 - Understanding Docker Compose further

## Docker and OCI

The [Open Container Initiative (OCI)](https://opencontainers.org/) is a Linux Foundation project which aims at creating industry standards for container formats and runtimes. Its primary goal is to ensure the compatibility and interoperability of container environments through defined technical specifications.

### Docker's role in OCI

[Docker](https://www.docker.com/) is one of the founding members of the OCI, and it has played a pivotal role in shaping the standards for container formats and runtimes. Docker initially developed the container runtime (Docker Engine) and image format (Docker Image) that serve as the basis for OCI specifications.

### OCI Specifications

OCI has three main specifications:

- **Runtime Specification (runtime-spec):** It defines the specification for executing a container via an isolation technology, like a container engine. The container runtime built by Docker, called 'containerd', has guided the development of the OCI runtime-spec.

- **Image Specification (image-spec):** It defines the container image format, which describes the contents of a container and can be run by a compliant runtime. Docker's initial image format has led to the creation of the OCI image-spec.

- **Distribution Specification (distribution-spec):** It defines an API protocol to facilitate and standardize the distribution of content. Docker's existing registry API served as a starting point and heavily influenced the design of the OCI Distro Spec.

### Compatibility between Docker and OCI

Docker remains committed to supporting the OCI specifications and, since its involvement in OCI, has continuously updated its software to be compliant with OCI standards. Docker's containerd runtime and image format are fully compatible with OCI specifications, enabling Docker containers to be run by other OCI-compliant container runtimes and vice versa.

In summary, Docker and the Open Container Initiative work together to maintain standardization and compatibility within the container industry. Docker has played a significant role in the development of the OCI specifications, ensuring that the container ecosystem remains healthy, interoperable, and accessible to a wide range of users and platforms across the industry.

## Underlying Technologies

Understanding the core technologies that power Docker will provide you with a deeper insight into how Docker works and will help you use the platform more effectively.

- Linux Containers (LXC)

Linux Containers (LXC) enables running multiple independent Linux systems on a single computer. Acting as isolated spaces, LXC containers share host resources like memory and processing power, without needing their own full operating system copy, ensuring lightweight and fast startup. Portable across compatible Linux systems, they find utility in diverse tasks such as running separate applications, testing software, or deploying cloud services. With user-friendly management tools available, LXC simplifies container creation, monitoring, and management.

- Control Groups (cgroups)

Control Groups (cgroups) is a Linux kernel feature that allows the allocation and management of resources like CPU, memory, and I/O to a set of processes. Docker leverages cgroups to limit the resources used by containers and ensure that one container does not monopolize the resources of the host system.

**cgroups** or **control groups** is a Linux kernel feature that allows you to allocate and manage resources, such as CPU, memory, network bandwidth, and I/O, among groups of processes running on a system. It plays a crucial role in providing resource isolation and limiting the resources that a running container can use.

Docker utilizes cgroups to enforce resource constraints on containers, allowing them to have a consistent and predictable behavior. Below are some of the key features and benefits of cgroups in the context of Docker containers:

### Resource Isolation

cgroups helps to confine each container to a specific set of resources, ensuring fair sharing of system resources among multiple containers. This enables better isolation between different containers, so that a misbehaving container does not consume all available resources, thereby negatively affecting other containers.

### Limiting Resources

With cgroups, you can set limits on various system resources used by a container, such as CPU, memory, and I/O. This helps to prevent a single container from consuming excessive resources and causing performance issues for other containers or the host system.

### Prioritizing Containers

By allocating different shares of resources, cgroups allows you to give preference or priority to certain containers. This can be useful in scenarios where some containers are more critical than others, or during high resource contention situations.

### Monitoring

cgroups also offers mechanisms for monitoring the resource usage of individual containers, which helps to gain insights into container performance and identify potential resource bottlenecks.

Overall, cgroups is an essential underlying technology in Docker. By leveraging cgroups, Docker provides a robust and efficient container runtime environment, ensuring the containers have the required resources while maintaining good overall system performance.

- Union File Systems (UnionFS)

UnionFS is a file system service that allows the overlaying of multiple file systems in a single, unified view. Docker uses UnionFS to create a layered approach for images and containers, which enables better sharing of common files and faster container creation.

Union filesystems, also known as UnionFS, play a crucial role in the overall functioning of Docker. It's a unique type of filesystem that creates a virtual, layered file structure by overlaying multiple directories. Instead of modifying the original file system or merging directories, UnionFS enables the simultaneous mounting of multiple directories on a single mount point while keeping their contents separate. This feature is especially beneficial in the context of Docker, as it allows us to manage and optimize storage performance by minimizing duplication and reducing the container image size.

These are some of the essential features of union filesystems:

- **Layered Structure**: UnionFS builds a layered structure consisting of multiple read-only layers and a top writable layer. This structure enables efficient handling of changes by only updating the writable layer, while the read-only layers preserve the original data.

- **Copy-on-Write**: The copy-on-write (COW) mechanism is an indispensable feature of UnionFS. If a container makes changes to an existing file, the system creates a copy of the file in the writable layer, leaving the original file in the read-only layer untouched. This process restricts modification to the topmost layer, ensuring a fast and resource-efficient operation.

- **Resource Sharing**: Union filesystems allow multiple containers to share common base layers while running separately. This feature prevents resource duplication and saves significant storage space.

- **Fast Container Initialization**: Union filesystems make it possible to create new containers instantly by merely creating a new writable layer on existing read-only layers. This quick initialization reduces the overhead of duplicated file operations, ultimately improving performance.

## Popular Union Filesystems in Docker

Docker supports multiple union filesystems that facilitate building and managing containers. Some of the popular options include:

- [@article@**AUFS (Advanced Multi-Layered Unification Filesystem)**](http://aufs.sourceforge.net/): AUFS is widely used as a Docker storage driver, enabling efficient management of multiple layers.
- [@article@**OverlayFS (Overlay Filesystem)**](https://www.kernel.org/doc/html/latest/filesystems/overlayfs.html): OverlayFS is another union filesystem supported by Docker. It uses a simplified approach compared to AUFS to create and manage overlayed directories.
- [@article@**Btrfs (B-Tree Filesystem)**](https://btrfs.wiki.kernel.org/index.php/Main_Page): Btrfs, a modern file system, offers compatibility with union filesystems in addition to advanced storage features like snapshots and checksumming.
- [@article@**ZFS (Z File System)**](https://zfsonlinux.org/): ZFS is a high-capacity and robust storage platform that provides union filesystem features along with data protection, compression, and deduplication.

- Namespaces

Namespaces are another Linux kernel feature that provides process isolation. They allow Docker to create isolated workspaces called containers. Namespaces ensure that processes within a container cannot interfere with processes outside the container or on the host system. There are several types of namespaces, like PID, NET, MNT, and USER, each responsible for isolating a different aspect of a process.

Namespaces are one of the core technologies that Docker uses to provide isolation between containers. In this section, we'll briefly discuss what namespaces are and how they work.

In the Linux kernel, namespaces are a feature that allows the isolation of various system resources, making it possible for a process and its children to have a view of a subset of the system that is separate from other processes. Namespaces help to create an abstraction layer to keep containerized processes separate from one another and from the host system.

There are several types of namespaces in Linux, including:

- **PID (Process IDs)**: Isolates the process ID number space, which means that processes within a container only see their own processes, not those on the host or in other containers.
- **Network (NET)**: Provides each container with a separate view of the network stack, including its own network interfaces, routing tables, and firewall rules.
- **Mount (MNT)**: Isolates the file system mount points in such a way that each container has its own root file system, and mounted resources appear only within that container.
- **UTS (UNIX Time Sharing System)**: Allows each container to have its own hostname and domain name, separate from other containers and the host system.
- **User (USER)**: Maps user and group identifiers between the container and the host, so different permissions can be set for resources within the container.
- **IPC (Inter-Process Communication)**: Allows or restricts the communication between processes in different containers.

### How Docker uses Namespaces

Docker uses namespaces to create isolated environments for containers. When a container is started, Docker creates a new set of namespaces for that container. These namespaces only apply within the container, so any processes running inside the container have access to a subset of system resources that are isolated from other containers as well as the host system.

By leveraging namespaces, Docker ensures that containers are truly portable and can run on any system without conflicts or interference from other processes or containers running on the same host.

In summary, namespaces provide a level of resource isolation that enables running multiple containers with separate system resources within the same host, without them interfering with each other. This is a critical feature that forms the backbone of Docker's container technology.

## Docker Tools and Building blocks

1. Docker Engine
2. Docker Desktop - Includes Daemon,CLI
3. Docker Hub
4. Docker Compose

## Outline

- Images and containers:- A Container is running unit of software while Image is a template/blueprint for containers.Multiple containers can be created based on one image.
- Data & Volumes in Containers
- Containers & Networking
- Multi-Container Project
- Docker-compose
- Utility containers
- Deploying Docker Containers

## Commands

```bash
# Check the version of Docker installed
docker --version

# Getting help in Docker commands
docker --help
docker image --help

# Show Docker system information
docker system

# Show Docker disk usage
docker system df

# Show detailed Docker system information
docker system info

# Remove all unused Docker resources
docker system prune -a

# Display the top resource-consuming processes of a Docker container with a given container ID or name
docker top 9009722eac4d

# Show live resource usage statistics of a Docker container with a given container ID or name
docker stats 9009722eac4d

# Run a Docker container with a Java hello world application, limited to 512MB memory
docker container run -p 5000:5000 -d -m 512m in28min/hello-world-java:0.0.1.RELEASE

# Run a Docker container with a Java hello world application, limited to 512MB memory and CPU quota of 50%
docker container run -p 5000:5000 -d -m 512m --cpu-quota=50000 in28min/hello-world-java:0.0.1.RELEASE

# Show Docker system events
docker system events




# Show live resource usage statistics of a Docker container with a given container ID or name
docker container stats 4faca1ea914e3e4587d1d790948ec6cb8fa34f26e900c12632fd64d4722fd59a

# Show live resource usage statistics of a Docker container with a given container ID or name
docker stats 42f170966ce613d2a16d7404495af7b3295e01aeb9142e1fa1762bbdc581f502

# Change directory to the Python hello world project
cd /in28Minutes/git/devops-master-class/projects/hello-world/hello-world-python

# Run a Docker container with a Python hello world application, mapped to port 5000
docker run -p 5000:5000 -d in28min/hello-world-python:0.0.2.RELEASE

# Show the history of a Docker image with a given image ID
docker history e66dc383f7a0

# Push a Docker image to a registry
docker push in28min/hello-world-python:0.0.2.RELEASE


# Run a Docker container with a Node.js hello world application, mapped to port 5000
docker container run -d -p 5000:5000 in28min/hello-world-nodejs:0.0.2.RELEASE

# Push a Docker image to a registry
docker push in28min/hello-world-nodejs:0.0.2.RELEASE

# Change directory to the Java hello world project
cd ../hello-world-java/


# Push a Docker image to a registry
docker push in28min/hello-world-java:0.0.2.RELEASE




# Run a Docker container with a Node.js hello world application, mapped to port 5001 and ping google.com
docker run -d -p 5001:5000 in28min/hello-world-nodejs:0.0.3.RELEASE ping google.com




# Run a Docker container with a currency exchange service
docker run -d -p 8000:8000 --name=currency-exchange in28min/currency-exchange:0.0.1-RELEASE

# Run a Docker container with a currency conversion service
docker run -d -p 8100:8100 --name=currency-conversion in28min/currency-conversion:0.0.1-RELEASE




# List Docker networks
docker network ls

# Inspect a Docker network with a given network name
docker network inspect bridge




# Run a Docker container with a currency conversion service, linked to the currency exchange service and environment variable set
docker run -d -p 8100:8100 --env CURRENCY_EXCHANGE_SERVICE_HOST=http://currency-exchange --name=currency-conversion --link currency-exchange in28min/currency-conversion:0.0.1-RELEASE




# Create a Docker network with a given network name
docker network create currency-network

# Stop a running container with a given container ID or name
docker container stop currency-exchange

# Stop a running container with a given container ID or name
docker container stop currency-conversion

# Run a Docker container with a currency exchange service, connected to the currency-network
docker run -d -p 8000:8000 --name=currency-exchange --network=currency-network in28min/currency-exchange:0.0.1-RELEASE

# Run a Docker container with a currency conversion service, connected to the currency-network and environment variable set
docker run -d -p 8100:8100 --env CURRENCY_EXCHANGE_SERVICE_HOST=http://currency-exchange --name=currency-conversion --network=currency-network in28min/currency-conversion:0.0.1-RELEASE


# List running containers
docker container ls

# List Docker networks
docker network ls

# Inspect a Docker network with a given network name
docker network inspect microservices_currency-compose-network

# List all containers, including stopped ones
docker container ls -a

# Remove all unused Docker resources
docker system prune -a

```

```bash
# Build a Docker image for a Java hello world application with a given tag
docker build -t in28min/hello-world-java:0.0.1.RELEASE .

# Push the Docker image with the specified tag to a registry
docker push in28min/hello-world-java:0.0.1.RELEASE

# Build a Docker image for a Python hello world application with a given tag
docker build -t in28min/hello-world-python:0.0.1.RELEASE .

# Push the Docker image with the specified tag to a registry
docker push in28min/hello-world-python:0.0.1.RELEASE


# Build a Docker image for a Node.js hello world application with a given tag
docker build -t in28min/hello-world-nodejs:0.0.1.RELEASE .

# Push the Docker image with the specified tag to a registry
docker push in28min/hello-world-nodejs:0.0.1.RELEASE

```

### Host Networking in Docker for Mac and Windows

- <https://docs.docker.com/network/host/>

>The host networking driver only works on Linux hosts, and is not supported on Docker Desktop for Mac, Docker Desktop for Windows, or Docker EE for Windows Server.

## Ignoring dockerfiles

Create a .dockerignore files.It igonres the files.

Containers:

1. Application containers - Includes your code and Environments
2. Utility containers - contains only environments that can be used in conjuction with the app.
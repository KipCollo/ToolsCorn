# Container Orchestration

Container Orchestration is about Managing Container Lifecycle,in large/dynamic environment.

Orchestration tools includes:

1. Kubernetes - It is the most popular container orchestration platform, due to its scalability, flexibility, and open source nature. It is also known as the de facto orchestration platform for the containers.
2. Docker Swarm - A native container orchestration platform from Docker, it offers ease of use and integration with the Docker ecosystem.
3. Apache Mesos - It is a distributed resource management platform that can also be used for container orchestration, known for its high performance and scalability.
4. Nomad - It is a lightweight and flexible container orchestration platform designed for cloud native applications.
5. AWS Elastic Container Service

Managed Kubernetes service:

1. AWS EKS
2. GCP GKE
3. Azure AKS

Container Orc. can be used to perform a lot of tasks i.e:

1. Provisioning and Deploying of containers
2. Scaling or Load Balancing for containers
3. Resource Management and Scheduling of Containers
4. Health Monitoring of Containers and Host machine.

## Why is Container Orchestration Essential?

1. Automating container management - Manually managing a large number of containers is error-prone and time-consuming. Container orchestration platforms automate many tasks, including:
   - Deployment: Orchestrators can automatically deploy containers to different nodes in a cluster, ensuring that applications are available and running smoothly.
   - Scaling: Orchestrators can automatically scale containerized applications up or down based on demand, ensuring optimal resource utilization.
   - Health monitoring: Orchestrators can monitor the health of containers and automatically restart them if they fail, ensuring application uptime.
   - Networking: Orchestrators can configure and manage networks for containerized applications, ensuring that they can communicate with each other and external resources.

2. Improving resource utilization - Container orchestration platforms can help improve resource utilization by ensuring that containers are only running when needed. This can lead to significant cost savings, especially in cloud environments where resources are billed per hour.
3. Enabling multi-cloud deployments - Container orchestration platforms can enable multi-cloud deployments, where applications are deployed across multiple cloud providers. This can provide greater flexibility and resilience, as well as reduce reliance on any single vendor.

## Container Runtime Interface (CRI)

The goal of the Container Runtime Interface (CRI) is to allow easy integration of container runtimes with kubelet. By providing a protobuf method for API, specifications and libraries, new runtimes can easily be integrated without needing deep understanding of kubelet internals.

The project is in early stage, with lots of development in action. Now that Docker-CRI integration is done, new runtimes should be easily added and swapped out. At the moment, CRI-O, rktlet and frakti are listed as work-in-progress.

`containerd` - The intent of the containerd project is not to build a user-facing tool; instead, it is focused on exposing highly-decoupled low-level primitives. Because of it modularity and low overhead, large cloud providers use this engine. User facing tools such as crictl, ctr, and nerdctl are being further developed.

    ​Defaults to runC to run containers according to the OCI Specifications
    Intended to be embedded into larger systems
    Minimal CLI, focused on debugging and development

With a focus on supporting the low-level, or backend, plumbing of containers, this project is better suited to integration and operation teams building specialized products, instead of typical build, ship, and run application.

`CRI-O` - This is a graduated project under CNCF projects. It uses the Kubernetes Container Runtime Interface with OCI-compatible runtimes, thus the name CRI-O. Currently, there is support for runC (default) and Clear Containers, but a stated goal of the project is to work with any OCI-compliant runtime.

While newer than Docker or rkt, this project has gained major vendor support due to its flexibility and compatibility.

`Docker` - Launched in 2013, Docker became synonymous with running containerized applications. Docker made containerizing, deploying, and consuming applications easy. As a result, it became the default option in production. With an open registry of images, Docker Hub, you can download and deploy vendor or individual-created images on multiple architectures with a single and easy to use toolset. This ease meant it was the sensible default choice for any developer as well. Issues with rapid updates and interaction with stakeholders lead to major vendors moving away from Docker soon after it became part of Mirantis.

Over the past few years, Docker has continued to grow and add features, including orchestration, which they call Swarm. These added features addressed some of the pressing needs in production, but also increased the vendor-lock and size of the product. This has lead to an increase in open tools and specifications such as CRI-O. A developer looking toward the future would be wise to work with mostly open tools for containers and Kubernetes, but he or she should understand that Docker is still the production tool of choice outside of a Red Hat environment at the moment.

`rkt` - The rkt runtime, pronounced rocket, provides a CLI for running containers. Announced by CoreOS in 2014, it is now part of the Cloud Native Computing Foundation family of projects. Learning from early Docker issues, it is focused on being more secure, open and interoperable. Many of its features have been met by Docker improvements. It is not quite an easy drop-in replacement for Docker, but progress has been made. rkt uses the appc specification, and can run Docker, appc and OCI images. It deploys immutable pods.

NOTE:
After Red Hat bought CoreOS work on rkt stopped in favor of CRI-O. The rkt project has become the first archived project of CNCF. While the code is available to be forked and worked on, no one has done so at this point.

There has been a lot of attention to the project and it was expected to be the leading replacement for Docker until CRI-O became part of the official Kubernetes Incubator.
# Containerizaton

Containerization technologies includes:

- Docker
- Containerd
- Cri-o
- Podman
- rkt

Containers and virtual machines (VMs) are both used in the world of virtualization, but they serve different purposes and offer distinct advantages.

`Virtual Machines: Isolated and Versatile` - Virtual machines provide a fully isolated virtual environment, complete with an operating system and all necessary dependencies. Each VM runs on a hypervisor, a layer that abstracts the physical hardware and allows multiple VMs to coexist on a single physical machine.

Virtual machines provide virtual hardware (or hardware on which an operating system and other programs can be installed). They take a long time (often minutes) to create and require significant resource overhead because they run a whole operating system in addition to the software you want to use. Virtual machines can perform optimally once everything is up and running, but the startup delays make them a poor fit for just-in-time or reactive deployment scenarios.

Here are some key characteristics of virtual machines:

1. Strong isolation - Each VM operates as an independent entity, with its own dedicated resources and a separate OS instance. This isolation makes VMs highly secure, as vulnerabilities within one VM do not impact others.
2. Compatibility - Virtual machines can run different operating systems within the same hardware. This makes VMs versatile and allows for running legacy applications or different operating system versions in parallel.
3. Complete abstraction - VMs completely abstract the underlying hardware, providing hardware-level virtualization. This means VMs operate as if they are running on dedicated physical machines, giving them full control over the virtual environment.
4. Resource overhead - VMs consume more resources compared to containers due to the need for a separate OS instance for each VM. This can result in higher infrastructure costs and slower startup times compared to containers.

`Containers: Lightweight and Efficient` - Containers provide a way to package and run applications with their dependencies, isolated from the underlying host system. The core idea behind containers is to offer a lightweight and highly efficient alternative to traditional VMs.

Unlike virtual machines, Docker containers don’t use any hardware virtualization.
Programs running inside Docker containers interface directly with the host’s Linux kernel. Many programs can run in isolation without running redundant operating systems or suffering the delay of full boot sequences.

Docker is not a hardware virtualization technology. Instead, it helps you use the container technology already built into your operating system kernel.

Here are some key characteristics of containers:

1. Resource efficiency - Containers share the host system's operating system (OS) kernel, eliminating the need for multiple OS instances. This reduces the overhead and frees up resources, making containers significantly more resource-efficient compared to VMs.
2. Rapid startup and scalability - Containers can start and stop almost instantaneously, often in seconds. This rapid startup time makes them highly scalable and allows for horizontal scaling, meaning you can easily spin up multiple instances of an application to handle increased workload.
3. Isolation and security - Containers are isolated from one another and from the host system, providing strong isolation of resources. However, since they share the OS kernel, a vulnerability in the kernel can potentially affect all containers running on the host.
4. Ease of management - Containers are easier to manage due to their lightweight nature. They can be deployed, updated, and rolled back effortlessly, making them ideal for applications that require frequent updates and continuous integration/continuous deployment (CI/CD) workflows.

The choice between containers and VMs depends on your specific use case and requirements. Here are a few scenarios where one might be more suitable:

- Development and testing - Containers are widely used in development and testing environments due to their agility and ease of management. They allow developers to create reproducible environments and simplify deployment.
- Microservices architecture - Containers are a natural fit for microservices-based architectures, where applications are broken down into small, independent services. The lightweight nature of containers enables easy scaling and deployment of individual services.
- Legacy applications - Virtual machines are preferable for running legacy applications that may not be compatible with modern container environments. VMs allow for maintaining the existing infrastructure and running applications without significant modifications.
- High isolation requirements - In scenarios where strict isolation and security are crucial, VMs provide stronger guarantees compared to containers. Industries such as finance and healthcare, where data privacy is paramount, often opt for VMs.

Containers and virtual machines offer different levels of isolation, resource efficiency, and versatility. Containers excel in providing lightweight, scalable, and easy-to-manage environments, while virtual machines offer strong isolation and compatibility with different operating systems. By understanding the differences between the two, you can make an informed decision when choosing the right virtualization technology for your needs.

## History of Containers

`Chroot (1970s)` - The concept of isolation dates back to the chroot system call in Unix operating systems, which was introduced in the 1970s. Chroot allows a process to have its own isolated view of the filesystem.

`FreeBSD Jails (2000)` - FreeBSD introduced the concept of jails, which provided lightweight virtualization by isolating processes, filesystems, and networking. This was an early form of containerization.

`Solaris Containers (2004)` - Sun Microsystems developed Solaris containers, a more advanced form of OS-level virtualization. It allowed multiple instances of Solaris to run on a single host, each isolated from the others.

`cgroups and Namespaces (2007)` - The Linux kernel introduced cgroups (control groups) and namespaces, laying the groundwork for containerization. These features enabled resource isolation (cgroups) and process isolation (namespaces).

`LXC (Linux Containers) (2008)` - LXC was one of the first attempts to create a user-friendly interface for Linux containers. It used cgroups and namespaces to provide process and resource isolation.

`Docker (2013)` - Docker revolutionized container technology by making it accessible to a broader audience. Docker introduced a user-friendly command-line interface and standardized container images using Dockerfiles. This allowed developers to package applications and their dependencies in a consistent manner

`Container Orchestration (2014 onward)` - With the rise of microservices and the need to manage and scale containers efficiently, container orchestration tools such as Kubernetes (originally developed by Google), Docker Swarm, Apache Mesos or Hashicorp's Nomad gained popularity. These tools automate the deployment, scaling, and management of containerized applications.

`OCI (Open Container Initiative) (2015)` - To standardize container formats and runtimes, Docker and other industry leaders founded the OCI. The OCI specifications define the Open Container Format (OCF) for container images and the Open Container Runtime (OCR) for container runtimes.

`Containerd (2017)` - Docker donated its container runtime, containerd, to the Cloud Native Computing Foundation (CNCF). Containerd is now a core component of many container platforms and orchestration tools.

## Developing Container Technologies

`Containerd`- While not exactly emerging (it has been around for a few years), containerd is worth mentioning. It's a core container runtime that was originally part of Docker but has become a standalone project and a key component of various container platforms.

`Podman` - Podman is an open source container management tool that aims to provide a daemonless, rootless container experience. It allows users to manage containers without requiring a central daemon process, making it a lightweight alternative to Docker.

`BuildKit` - BuildKit is a toolkit for building container images. Originating from the Moby project (the open source project to advance the software containerization movement), it provides a more modular and efficient way to build container images. It's often integrated into container build systems.

`Kata Containers` - Kata containers is an open source project that combines lightweight virtual machines (VMs) with the speed and manageability of containers. It aims to provide the security benefits of VMs while maintaining the performance advantages of containers.

`CRI-O` - CRI-O is a lightweight container runtime specifically designed for Kubernetes. It implements the Kubernetes Container Runtime Interface (CRI) to enable the launching of containers directly from Kubernetes without the need for a full container orchestration platform like Docker.

`KubeVirt` - KubeVirt extends Kubernetes to support running and managing virtual machines alongside container workloads. This allows organizations to have a unified platform for managing both VMs and containers.

`Firecracker` - Developed by Amazon Web Services (AWS), Firecracker is a lightweight open source virtualization technology designed for serverless computing. It provides the benefits of both containers and VMs by combining the security of VMs with the speed and efficiency of containers.

Open Container Initiative (OCI) Specifications - While not a specific technology, the OCI continues to play a crucial role in standardizing container formats and runtimes. As container adoption grows, adherence to common specifications becomes increasingly important for interoperability.

Kpack - Kpack is a Kubernetes-native platform for building and updating container images. It automates the image-building process, making it easier for developers to create and manage container images directly within a Kubernetes environment.

Gvisor - Gvisor is a user-space kernel, developed by Google, that provides an additional layer of isolation for containers. It enhances the security and isolation of containers without the performance overhead associated with traditional virtualization.

Containers have seen a huge rejuvenation in the past three years. They provide a great way to package, ship, and run applications - that is the Docker motto, now provided by many tools.

The developer experience has been boosted tremendously thanks to containers. Containers, and Docker specifically, have empowered developers with ease of building container images, simplicity of sharing images via registries, and providing a powerful user experience to manage containers. Now several tools, such as Buildah, Podman, containerd, and others allow for easy container creation and management.

## Containerizing an Application

To containerize an application, you begin by creating your application. Not all applications do well with containerization. The more stateless and transient the application, the better. Also, remove any environmental configuration, as those can be provided using other tools, like ConfigMaps and secrets. Develop the application until you have a single build artifact which can be deployed to multiple environments without needing to be changed, using decoupled configuration instead. Many legacy applications become a series of objects and artifacts, residing among multiple containers.

The use of Docker had been the industry standard. Large companies like Red Hat are moving to other open source tools. While currently new, one may expect them to become the new standard.

`buildah` is a tool that focuses on creating Open Container Initiative (OCI) images. It allows for creating images with and without a Dockerfile. It also does not require superuser privilege. A growing golang-based API allows for easy integration with other tools. 

`podman`, a "pod manager" tool, allows for the life cycle management of a container, including creating, starting, stopping and updating. You could consider this a replacement for docker. Red Hat's goal was to replace all Docker functionality with podman, using the same syntax to minimize transition issues. Some places alias docker to actually run podman.

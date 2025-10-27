# DevOps and Site Reliability Engineering

`DevOps (Development + Operations)` is a set of practices, principles, and cultural philosophies that aim to enhance collaboration and communication between software development (Dev) and IT operations (Ops) teams. The primary goal is to automate and streamline the processes of software delivery and infrastructure changes, fostering a culture of continuous improvement and faster, more reliable releases.It allows a single team to handle entire application lifecycle,from development, testing,deployment and operations.It helps us reduce disconnection between software developers,quality assuarance(QA) engineers and system administrators.

`Site Reliability Engineering`, or SRE, is a discipline that incorporates aspects of software engineering and applies them to infrastructure and operations problems. It was developed at Google to create scalable and highly reliable software systems.

DevOps and SRE are two different disciplines of Software Engineering, but they are deeply interconnected and rely on each other for success. DevOps focuses on creating new features and improvements, while SRE focuses on ensuring the reliability and stability of the system. Both DevOps and SRE require strong collaboration and communication to achieve common goals.

## Characteristics of the Pre-DevOps Era

The pre-DevOps era in software development was a starkly different landscape than what we see today. It was a time of siloed teams, rigid methodologies, and a lot of manual work, which often led to slow and unreliable software delivery.

Here are some key characteristics of the pre-DevOps era:

1. Waterfall Model - The dominant methodology was the Waterfall model, a linear approach where each stage had to be completed before moving on to the next. This made it difficult to adapt to changes and respond quickly to new requirements.
2. Siloed Teams - Developers, testers, and operations teams worked independently, often with little communication or collaboration. This created a "throw it over the wall" mentality, where each team blamed the other for problems.
3. Manual Processes - Most tasks, from testing to deployment, were done manually. This was time-consuming and error-prone, leading to delays and inconsistencies.
4. Limited Automation - There were few tools available to automate repetitive tasks, making it difficult to scale software development.
5. Slow and Unreliable Delivery - Releases were infrequent and often buggy, causing frustration for both developers and users.

## Emergence of DevOps

DevOps software development methodology that emphasizes collaboration and communication between development and operations teams, didn't appear overnight. Its roots can be traced back to several contributing factors and key turning points.

- `Early Influences`

1. Agile movement: The Agile movement, emerging in the 1990s and formally established in 2001, emphasized iterative development and collaboration, paving the way for DevOps' focus on faster delivery and team integration.
2. Automation: The rise of automation tools throughout the software development lifecycle (SDLC) simplified manual tasks, allowing teams to focus on higher-level activities.
3. Cloud computing: The emergence of cloud platforms provided a scalable and flexible environment for development and deployment, further facilitating collaboration and faster delivery.

- `Formative Years (2007-2009)`

1. Patrick Debois: In 2007, frustrated with the traditional silos between development and operations, Patrick Debois, a Belgian consultant and project manager, began advocating for closer collaboration. He coined the term "DevOps" in 2009, which resonated with the growing desire for a more integrated approach to software development. To learn more, you can read "The Origins of DevOps: What's in a Name?" article, by Steve Mezak or watch "The (Short) History of DevOps" video.
2. Agile Infrastructure: Around the same time, the "Agile Infrastructure" movement emerged, focusing on applying Agile principles to infrastructure management, aligning it with development practices.

- `Gaining Momentum (2010s)`

1. Continuous Integration and Continuous Delivery (CI/CD): The adoption of CI/CD practices became instrumental in accelerating software delivery and improving feedback loops between development and operations.
2. DevOps tools and platforms: A surge of specialized DevOps tools and platforms emerged, automating tasks and providing shared visibility throughout the SDLC.
3. Increased awareness and adoption: DevOps became a popular topic in conferences and publications, leading to increased awareness and adoption across various industries.

- `Continuous Evolution (Present Day)`

1. DevOps continues to evolve: As technology and business needs change, new DevOps practices and tools emerge, focusing on areas like security, compliance, and automation in cloud environments.
2. Shift towards DevOps culture: The focus expands beyond tools and processes to create a collaborative culture that fosters communication, shared responsibility, and continuous improvement.

## Key Principles of DevOps

Adhering to the key principles of DevOps will ensure a more successful development, delivery, and implementation of applications and services.

- Collaboration:- DevOps emphasizes breaking down silos between development and operations teams, encouraging shared responsibilities and improved communication.
- Automation:- Automation is a core tenet of DevOps, involving the use of tools to automate manual and repetitive tasks in the software development and delivery pipeline.
- Continuous Integration (CI):- Developers integrate their code into a shared repository multiple times a day, with automated builds and tests to detect and address issues early in the development process.
- Continuous Deployment (CD):- Continuous Deployment involves automatically deploying code changes to production environments after passing automated tests. This ensures rapid and reliable releases.
- Infrastructure as Code (IaC):- IaC involves managing and provisioning infrastructure through code, enabling consistent and repeatable infrastructure deployments.
- Monitoring and Feedback:- DevOps emphasizes continuous monitoring of applications and infrastructure, providing real-time feedback to identify and address issues promptly.

## DevOps Architecture

Key features of DevOps includes:-

- Automation:- Reduces time consumption during testing and deployment.Bugs can be catched quickly.
- Collaboration:- Development and Operations team collaborates as DevOps team,which improves cultural model as teams become more productive.
- Integration:- Applications need to be integrated with other components in the environment.Integration phase is where existing code is combined with new functionality and then tested.
- Configuration Management:- It ensures application interacts with only those resources that are concerned with the environment in which it runs.The configuartion file can be written during deployment,or they can be loaded at run time,depending on environment it is running.

It involves:-

1. Programming Language.
2. Basics of Operating System(OS):- Windows,Linux,Unix.
3. Command-line interface(CLI).
4. Version Control & Hosting:- Git,GitHub,BitBucket,Gitlab.
5. Cloud providers:- AWS,Azure,GCP.
6. Containerization and container Orchestration:- Docker,Kubernetes.
7. CI/CD:- Gitlab CI,Jenkins,Circle CI.
8. Networking & Security Protocols:- FTP/SFTP,HTTP/HTTPS,SSL/TLS,DNS,SSH.
9. Setting Up Firewalls,Proxy and Servers.
10. Serverless:- Cloudflare
11. Infrastructure provisioning:- Terraform,Pulumi,AWS CDK
12. Configuration Management:- Ansible,Chef,Puppet.
13. Infrastructure Monitoring:- Grafana,Datadog,Prometheus,Zabbix
14. Application Monitoring:- Jaeger,Datadog,AppDynamic,OpenTelemetry.

## DevOps Tools

Devops tools includes:-

1. Plan - Jira,Slack,Confluence,GitHub Projects,Notion.
2. Code:- VSCode,Intellij,GIT
3. Build: AWS CodeBuild,Gradle,Apache Maven
4. Test: Soap UI,Jest,JUnit,Appium
5. Release:- Jenkins,Travis CI,Bamboo
6. Deploy:- AWS,Google Cloud,Azure
7. Operate:- Terraform,Kubernetes,Puppet,Ansible
8. Monitor:- Prometheus,Grafana,Datadog



`Version Control`:-

1. Git is widely used for version control, and helps track changes in source code during development.
2. Subversion (SVN) is a centralized version control system. It allows users to keep track of all changes made to files and directories in a repository. SVN is known for its simplicity and is often used in projects where a centralized, linear workflow is preferred.
3. Bitbucket is a cloud-based platform offering Git-based version control, code review, and CI/CD tools. It offers features like code hosting, issue tracking, and pull requests, making it popular for open source projects and collaboration.
4. GitHub is a popular cloud-based platform for version control, social coding, and project management.

`Continuous Integration/Continuous Deployment (CI/CD)`:-

1. Jenkins is an open source automation server that facilitates building, testing, and deploying code changes.
2. Travis CI is a CI/CD service that integrates with GitHub repositories for automated testing and deployment.
3. CircleCI is a cloud-based CI/CD platform supporting automation and parallel testing.

`Configuration Management`:-

1. Ansible is an open source automation tool that simplifies configuration management, application deployment, and task automation.
2. Chef enables infrastructure automation and configuration management using reusable scripts called recipes.
3. Puppet is a configuration management tool for automating the provisioning and management of infrastructure.
Puppet It allows delivery and release of technology changes quickly and frequently.Has features of versioning,automated testing and continuous delivery.It enables to manage entire infrastructure as code without expanding size of the team.
Puppet is a tool that helps you manage and automate the configuration of servers.Puppet is made up of several packages, which you use to manage, store and run your Puppet code. These packages include puppetserver, puppetdb, and puppet-agent — which includes Facter and Hiera.


`Containerization and Orchestration`:-

1. Docker is a very popular platform for developing, shipping, and running applications in containers.
2. Podman is an open source container engine that offers a Docker-compatible command-line interface and runtime. It features image creation, management, and deployment, but lacks some advanced features like built-in orchestration.
3. LXC (Linux Containers) is a lightweight containerization technology built into the Linux kernel, offering efficient resource utilization and isolation. It is popular for its simplicity and portability, but lacks some advanced features of other tools.
4. Kubernetes is an open source container orchestration platform for automating the deployment, scaling, and management of containerized applications. It is considered the de facto orchestration platform for containers due to its popularity.
5. OpenShift is a container platform developed by Red Hat. It extends Kubernetes and provides additional features for enterprise applications, including source-to-image builds and developer-focused tools.
6. Apache Mesos is an open source cluster management and orchestration platform designed to simplify the management of distributed applications and resources in data centers or cloud environments.

`Infrastructure as Code (IaC)`:-

1. Terraform is a tool for building, changing, and versioning infrastructure efficiently and safely.
2. AWS CloudFormation is Amazon's IaC service for provisioning and managing AWS resources using templates.
3. OpenTofu is a fork of Terraform that is open source, community-driven, and managed by the Linux Foundation.

`Continuous Monitoring`:-

1. Prometheus is an open source monitoring and alerting toolkit designed for reliability and scalability.
2. Zabbix is a comprehensive monitoring solution for servers, networks, applications, and other IT infrastructure. It offers monitoring capabilities, alerting, and reporting features. It supports various monitoring protocols and provides extensive customization options.
3. Nagios is a mature and popular open source monitoring tool with a focus on server and network monitoring. It offers a flexible plugin system for extending its monitoring capabilities and features robust alerting and notification options.
4. OpenNMS is an open source network management system with built-in monitoring capabilities. It provides comprehensive network discovery, mapping, and monitoring features, and offers a web-based interface for managing and visualizing network performance.
5. Grafana is a visualization platform that integrates with various data sources, including Prometheus, for creating interactive and shareable dashboards.
6. New Relic.

`Collaboration and Communication`

1. Slack is a team collaboration tool for communication and sharing updates.
2. Microsoft Teams is a communication and collaboration platform that integrates with other Microsoft tools.


`Logging`

1. ELK Stack (Elasticsearch, Logstash, Kibana) is a set of tools for log management, enabling search, analysis, and visualization of log data.
2. Fluentd is a lightweight and high-performance log collector and forwarder. It offers flexible configuration and supports various input plugins for collecting logs from different sources. It integrates seamlessly with other logging tools and platforms.
3. Splunk is a comprehensive logging platform offering log collection, indexing, search, analysis, and visualization. It provides powerful real-time analytics and AI-driven insights for troubleshooting and security.
4. Datadog is a comprehensive monitoring platform offering log management, metrics collection, and application performance monitoring functionalities.

`Source Code Management (SCM)`

1. Bitbucket is a Git repository management solution with features for code collaboration, continuous delivery, and more.
2. GitLab is a web-based Git repository manager with CI/CD, code review, and collaboration features.
3. GitHub is a very popular web-based platform that allows developers to store, track changes, and collaborate on code.

`Nagios`:- It determines the errors and rectify them with help of network,infrastructure,server and log monitoring systems.


## Start DevOps with Docker

- Step 00 00 - DevOps and Containerization
- Step 01 - Docker and DevOps - Installation and Introduction
- Step 02 - Your First Docker Usecase
- Step 03 - Important Docker Concepts - Registry, Repository, Tag, Image and Container
- Step 04 - Playing with Docker Images - Java, JavaScript and Python
- Step 05 - Playing with Docker - Detached Mode and Logs
- Step 06 - Playing with Docker Images and Containers
- Step 07 - Understanding Docker Architecture - Docker Client, Docker Engine
- Step 08 - Understanding Docker Popularity - My 3 Top Reasons
- Step 09 - Learning Docker Images - Commands
- Step 10 - Learning Docker Containers - Commands
- Step 11 - Learning Docker Commands - system and stats
- Step 12 - 01 - Import Docker Projects into Visual Studio Code
- Step 12 - 02 - Building Docker Images for Python Application
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

## DevOps with Kubernetes on Google Kubernetes Engine

- Step 01 - Getting Started with Docker, Kubernetes and Google Kubernetes Engine
- Step 02 - Creating Google Cloud Account
- Step 03 - Creating Kubernetes Cluster with Google Kubernete Engine (GKE)
- Step 04 - Review Kubernetes Cluster and Learn Few Fun Facts about Kubernetes
- Step 05 - Deploy Your First Spring Boot Application to Kubernetes Cluster
- Step 06 - Quick Look at Kubernetes Concepts - Pods, Replica Sets and Deployment
- Step 07 - Understanding Pods in Kubernetes
- Step 08 - Understanding ReplicaSets in Kubernetes
- Step 09 - Understanding Deployment in Kubernetes
- Step 10 - Quick Review of Kubernetes Concepts - Pods, Replica Sets and Deployment
- Step 11 - Understanding Services in Kubernetes
- Step 12 - Quick Review of GKE on Google Cloud Console
- Step 13 - Understanding Kubernetes Architecture - Master Node and Nodes
- Step 14 - Understand Google Cloud Regions and Zones
- Step 15 - Installing GCloud
- Step 16 - Installing Kubectl
- Step 17 - Understand Kubernetes Rollouts
- Step 18 - Generate Kubernetes YAML Configuration for Deployment and Service
- Step 19 - Understand and Improve Kubernetes YAML Configuration
- Step 20 - Using Kubernetes YAML Configuration to Create Resources
- Step 21 - Understanding Kubernetes YAML Configuration - Labels and Selectors
- Step 22 - Quick Fix to reduce release downtime with minReadySeconds
- Step 23 - Understanding Replica Sets in Depth - Using Kubernetes YAML Config
- Step 24 - Configure Multiple Kubernetes Deployments with One Service
- Step 25 - Playing with Kubernetes Commands - Top Node and Pod
- Step 26 - Delete Hello World Deployments
- Step 27 - Quick Introduction to Microservices - CE and CC
- Step 28 - Deploy Microservices to Kubernetes
- Step 29 - Understand Environment Variables created by Kubernetes for Services
- Step 30 - Microservices and Kubernetes Service Discovery - Part 1
- Step 31 - Microservices and Kubernetes Service Discovery - Part 2 DNS
- Step 32 - Microservices Centralized Configuration with Kubernetes ConfigMaps
- Step 33 - Simplify Microservices with Kubernetes Ingress - Part 1
- Step 34 - Simplify Microservices with Kubernetes Ingress - Part 2
- Step 35 - Delete Kubernetes Clusters

## Getting Started with Terraform

- Step 00 00 - Getting Started with Infrastructure as Code
- Step 00 01 - Getting Started with Terraform
- Step 01 - Creating and Initializing First Terraform Project
- Step 02 - Create AWS IAM User Access Key and Secret
- Step 03 - Configure Terraform Environment Variables for AWS Access Keys
- Step 04 - Creating AWS S3 Buckets with Terraform
- Step 05 - Playing with Terraform State - Desired, Known and Actual
- Step 06 - Playing with Terraform Console
- Step 07 - Creating AWS IAM User with Terraform
- Step 08 - Updating AWS IAM User Name with Terraform
- Step 09 - Understanding Terraform tfstate files in depth
- Step 10 - gitignore Terraform tfstate files
- Step 11 - Refactoring Terraform files - Variables, Main and Outputs
- Step 12 - Creating Terraform Project for Multiple IAM Users
- Step 13 - Playing with Terraform Commands - fmt, show and console
- Step 14 - Recovering from Errors with Terraform
- Step 15 - Understanding Variables in Terraform
- Step 16 - Creating Terraform Project for Understanding List and Map
- Step 17 - Adding Elements - Problem with Terraform Lists
- Step 18 - Creating Terraform Project for Learning Terraform Maps
- Step 19 - Quick Review of Terraform FAQ
- Step 20 - Understanding Creation of EC2 Instances in AWS Console
- Step 21 - Creating New Terraform Project for AWS EC2 Instances
- Step 22 - Creating New EC2 Key Pair and Setting Up
- Step 23 - Adding AWS EC2 Configuration to Terraform Configuration
- Step 24 - Installing Http Server on EC2 with Terraform - Part 1
- Step 25 - 01 - Installing Http Server on EC2 with Terraform - Part 2
- Step 25 - 02 - Immutable Servers with Infrastructure as Code
- Step 26 - Remove hardcoding of Default VPC with AWS Default VPC
- Step 27 - Remove hardcoding of subnets with Data Providers
- Step 28 - Remove hardcoding of AMI with Data Providers
- Step 29 - Playing with Terraform Graph and Destroy EC2 Instances
- Step 30 - Creating New Terraform Project for AWS EC2 with Load Balancers
- Step 31 - Create Security Group and Classic Load Balancer in Terraform
- Step 32 - Review and Destroy AWS EC2 with Load Balancers
- Step 33 - Creating Terraform Project for Storing Remote State in S3
- Step 34 - Create Remote Backend Project for Creating S3 Buckets
- Step 35 - Update User Project to use AWS S3 Remote Backend
- Step 36 - Creating multiple environments using Terraform Workspaces
- Step 37 - Creating multiple environments using Terraform Modules

## Learn Azure DevOps - Continuous Integration, Deployment and Delivery

- Step 00 00 - Getting Started with Continuous Integration, Deployment and Delivery
- Step 00 01 - Getting Started with Azure DevOps
- Step 01 - Getting Started with Azure DevOps - First Project
- Step 02 - Setting up Git Repo for Azure DevOps Pipeline
- Step 03 - Creating your first Azure DevOps Pipeline
- Step 04 - Getting Started with Azure DevOps - Agents and Jobs - 1
- Step 05 - Getting Started with Azure DevOps - Agents and Jobs - 2
- Step 06 - Using dependsOn with Jobs
- Step 07 - Creating Azure DevOps Pipeline for Playing with Stages
- Step 08 - Playing with Variables and dependsOn for Stages
- Step 09 - Understanding Azure DevOps Pipeline Variables
- Step 10 - Creating Azure DevOps Tasks for Copy Files and Publish Artifacts
- Step 11 - Running Azure DevOps Jobs on Multiple Agents
- Step 12 - Understanding Azure DevOps Deployment Jobs - Environments and Approvals
- Step 13 - Build and Push Docker Image in Azure DevOps - Part 1
- Step 14 - Build and Push Docker Image in Azure DevOps - Part 2
- Step 15 - Playing with Azure DevOps Releases

## CI, CD and IAAC on Azure AKS Kubernetes Clusters with Docker, Azure DevOps and Terraform

- Step 00 - Getting Started with IAAC for Azure AKS with Azure DevOps, Terraform and Kubernetes
- Step 01 - Review Terraform Configuration for Azure Kubernetes Cluster Creation
- Step 02 - Setting up Client ID, Secret and Public Key for Azure Kubernetes Cluster Creation
- Step 03 - Creating Azure DevOps Pipeline for Azure Kubernetes Cluster IAAC
- Step 04 - Performing Terraform apply to create Azure Kubernetes Cluster in Azure DevOps
- Step 05 - 01 - Installing Azure CLI
- Step 05 - 02 - Connecting to Azure Kubernetes Cluster using Azure CLI
- Step 06 - 01 - Creating Azure DevOps Pipeline for Deploying Microservice to Azure Kubernetes
- Step 06 - 02 - Managing Pipelines and Github Repositories for Kubernetes and Microservices
- Step 07 - Creating V2 and Enable Build and Push of Docker Image - Part 1
- Step 08 - Creating V2 and Enable Build and Push of Docker Image - Part 2
- Step 09 - Performing Terraform destroy to delete Azure Kubernetes Cluster in Azure DevOps
- Step 10 - Quick Review of Terraform destroy

## CI, CD and IAAC on AWS EKS Kubernetes Clusters with Docker, Azure DevOps and Terraform

- Step 00 - Geting Started with IAAC for AWS EKS with Azure DevOps, Terraform and Kubernetes
- Step 01 - Review Terraform Configuration for AWS EKS Cluster Creation
- Step 02 - Setup AWS S3 Buckets and Subnet Configuration
- Step 03 - Enable AWS Tools in Azure DevOps and Create Azure DevOps Pipeline
- Step 04 - Performing Terraform apply to create AWS EKS Cluster in Azure DevOps
- Step 05 - Retry Terraform apply for Creating Cluster Binding
- Step 06 - 01 - Installing AWS CLI
- Step 06 - 02 - Configure AWS CLI and Setup Kubernetes Connection using Service Account
- Step 07 - Creating Azure DevOps Pipeline for Deploying Microservice to AWS EKS
- Step 08 - Creating V3 and Enable Build and Push of Docker Image - Part 1
- Step 09 - Creating V3 and Enable Build and Push of Docker Image - Part 2
- Step 10 - Performing Terraform destroy to delete AWS EKS Cluster in Azure DevOps - 1
- Step 11 - Performing Terraform destroy to delete AWS EKS Cluster in Azure DevOps - 2

## Learn Azure DevOps with Boards and Backlogs

- Step 01 - Getting Started with Azure DevOps with Demo Generator
- Step 02 - Overview of Azure DevOps - Boards, Wiki, Repos and Pipelines
- Step 03 - Exploring Azure DevOps Boards - Epics, Features and User Stories
- Step 04 - Azure DevOps - Boards View vs Backlogs View
- Step 05 - Understanding Sprints in Azure DevOps
- Step 06 - Creating Azure DevOps Queries
- Step 07 - Playing with Azure DevOps Repos
- Step 08 - Quick Review of Azure DevOps Pipelines
- Step 09 - Quick Review of Azure DevOps

## Learn Continuous Integration with Jenkins

- Step 00 01 - Getting Started with Jenkins
- Step 01 - Introduction and Launching Jenkins as Docker Container
- Step 02 - Initializing Jenkins Plugins and Creating Github Repo
- Step 03 - Setting up Docker and Maven in Jenkins and First Pipeline Run
- Step 04 - Understanding Scripted Pipelines in Jenkins
- Step 05 - Understanding Declarative Pipelines in Jenkins - Stages
- Step 06 - Using Docker Images as Jenkins Pipeline Agents
- Step 07 - Review Pipeline Syntax and Understanding Variables
- Step 08 - Configuring Jenkins Pipeline Path with Docker and Maven Tools
- Step 09 - Running Unit Tests and Integration Tests in Jenkins Pipelines - 1
- Step 10 - Running Unit Tests and Integration Tests in Jenkins Pipelines - 2
- Step 11 - Build and Push Docker Image in Jenkins Pipelines - 1
- Step 12 - Build and Push Docker Image in Jenkins Pipelines - 2

## Getting Started with Ansible

- Step 00 01 - Getting Started with Ansible
- Step 01 - Creating EC2 Instances for Ansible - Manually and with Terraform
- Step 02 - Setting Ansible Project with cfg and ansible hosts
- Step 03 - Playing with Ansible Commands
- Step 04 - Playing with Ansible Host File and Custom Groups
- Step 05 - Creating an Ansible Playbook for Ping
- Step 06 - Understanding Ansible Terminology - Control Node, Managed Nodes, Inventory
- Step 07 - Creating New Ansible Playbook for Executing Shell Commands
- Step 08 - Playing with Ansible Variables
- Step 09 - Creating New Ansible Playbook for Understanding Ansible Facts
- Step 10 - Creating New Ansible Playbook for Installing Apache and Serving HTML
- Step 11 - Reuse and Executing Multiple Ansible Playbooks
- Step 12 - Understanding Conditionals and Loops with Ansible
- Step 13 - 01 - Getting Ready for EC2 Dynamic Inventory with Ansible
- Step 13 - 02 - Configuring EC2 Dynamic Inventory with Ansible
- Step 14 - Creating AWS EC2 Instances with Ansible
- Step 15 - Providing Declarative Configuration with Ansible
- Step 16 - Deleting all AWS EC2 Instances

TODO 

1. Deploy Web server with Docker for consistent environments and scalability
2. Automate CI with Jenkins remoting across environments for better efficiencies.
3. Automate a CI/CD pipeline on AWS for code deployment,testing and cloud management.
4. Implement a version control system to manage code changes and ensure collaborations
5. Automate Java app build and deployment with Gradle to streamline development and boost productivity.

## Linux Foundation

`The Linux Foundation` is the world’s leading home for collaboration on open source software, hardware, standards, and data. Linux Foundation projects are critical to the world’s infrastructure, including Linux, Kubernetes, Node.js, ONAP, PyTorch, RISC-V, SPDX, OpenChain, and more. The Linux Foundation focuses on leveraging best practices and addressing the needs of contributors, users, and solution providers to create sustainable models for open collaboration. The Linux Foundation has registered trademarks and uses trademarks.Linux is a registered trademark of Linus Torvalds.

## Site Reliability Engineering (SRE)

Site Reliability Engineering (SRE) is an approach to running large-scale, reliable services. Google is widely credited with formalizing and popularizing the term "SRE" and has since been adopted by many other tech companies. SRE blends aspects of software engineering with traditional IT and focuses on creating scalable and highly reliable software systems. The primary focus of SRE is to improve the reliability of services. Reliability is often measured through service level indicators (SLIs), service level objectives (SLOs), and service level agreements (SLAs). These metrics help define the performance and availability levels expected from a service.

While traditional IT operations might focus on keeping systems running, SRE provides a framework for balancing the need for system reliability with the need for new features and development. It does this by integrating development and operations teams more closely, using the same tools and techniques across both domains to improve the reliability and maintainability of systems.

SRE has had a significant impact on the way organizations manage their IT infrastructure and operations. It has led to the development of more reliable services, improved customer satisfaction, and faster innovation cycles. SRE practices have been adopted by many leading tech companies and are increasingly being applied in a variety of industries beyond tech.

## Measuring Reliability with SLIs

Measuring reliability is a crucial aspect in SRE; and one of the key tools used for this is Service Level Indicators (SLIs).

SLIs are specific, quantitative metrics that define the performance and reliability of a service. They are typically expressed as a ratio, percentage, or a specific numerical value. SLIs represent the aspects of a service that are most critical to its users. Selecting the right SLIs is crucial. They should align with user expectations and business goals. For example, if users value a fast response time, latency might be a critical SLI.

For example, for a web service, SLIs could include metrics like:

    Latency: The time it takes for a request to be processed
    Availability: The percentage of time the service is operational
    Error Rate: The proportion of requests that result in errors

Importance of SLIs in Measuring Reliability

    Quantifiable Objectives
    SLIs provide a way to set quantifiable objectives for the reliability of a service. For instance, an SLI for availability might be set at 99.9%, indicating that the service should be operational 99.9% of the time.
    Baseline for Comparison
    SLIs serve as a baseline for comparison. Teams can compare the actual performance against the defined SLIs to assess whether the service is meeting its reliability goals.
    Decision-Making
    SLIs guide decision-making. If SLIs are consistently not met, it may trigger actions to improve the service's reliability, such as infrastructure upgrades, code optimizations, or architectural changes.
    Communication
    SLIs provide a common language for communication between different teams within an organization. Whether it's between developers and SREs or business stakeholders, SLIs offer a clear and objective measure of reliability.

Let's consider a cloud storage service. An SLI for this service might include the latency of retrieving a file. The SLI could be set at a threshold of 100 milliseconds. If the actual latency consistently stays below this threshold, the service is considered to meet its reliability goals in terms of latency.
SLIs in Action

    Monitoring: Use monitoring tools to continuously collect data on SLIs. For example, monitor the response time of API calls to calculate latency.
    Alerting: Set up alerts based on SLIs to notify teams when performance deviates from the defined objectives. If latency exceeds the acceptable threshold, it triggers an alert for investigation.
    Analysis and Improvement: Conduct regular analysis on SLI data to identify patterns and areas for improvement. If SLIs indicate an increase in errors, it might prompt a code review or optimization efforts.

Service Level Indicators are fundamental in the practice of Site Reliability Engineering. They provide a quantitative and objective way to measure the reliability of services, helping teams set goals, make informed decisions, and continuously improve the performance of their systems. By defining and monitoring SLIs, SREs and development teams can work together to deliver more reliable and resilient software services.

## Embracing Risks with SLOs and Error Budgets

In SRE, embracing risks is an inherent part of the approach, and it's managed through the concepts of Service Level Objectives (SLOs) and error budgets. Let's explore how SLOs and error budgets enable teams to balance innovation and reliability while embracing a certain level of risk.
Service Level Objectives (SLOs)

SLOs are specific, measurable targets that define the acceptable level of reliability for a service. They are expressed as a percentage or ratio and represent the agreed-upon performance level that a service should achieve.

SLOs allow teams to set realistic goals based on user expectations and business requirements. For example, an SLO for availability might be set at 99.9%, indicating that the service should be available 99.9% of the time.

SLOs provide a clear metric for measuring the success of a service. If the service consistently meets or exceeds its SLOs, it is considered reliable.
Error Budgets

Error budgets are closely tied to SLOs and represent the allowed amount of errors or downtime within a specified timeframe. The error budget is essentially the inverse of the SLO. For example, if the SLO for availability is 99.9%, the error budget allows for 0.1% downtime.

Error budgets provide a way to balance the need for innovation and the desire for a highly reliable service. As long as the service stays within its error budget, teams have the flexibility to deploy new features and make changes without compromising reliability.

Teams use error budgets to inform decision-making. If the error budget is close to being exhausted, the focus may shift from deploying new features to ensuring the stability of the service.
Embracing Risks

SLOs and error budgets encourage a culture of innovation and experimentation. Teams are empowered to try new ideas and deploy changes, knowing that they have a defined threshold for acceptable risk.

When a service exceeds its error budget and an incident occurs, it becomes an opportunity for learning. Post-mortem analyses help teams understand the root causes of failures and implement improvements to prevent similar issues in the future.

Embracing risks doesn't mean accepting unnecessary failures. Instead, it fosters a culture of continuous improvement. Teams use data from incidents and breaches of error budgets to make informed decisions about how to enhance the reliability of the service.
Real-world Example

Consider an e-commerce platform with an SLO for latency. The SLO might be set at 95% of requests completing within 200 milliseconds. The corresponding error budget allows for 5% of requests to exceed this threshold. This setup allows the development team to innovate and deploy new features while being mindful of the acceptable level of risk in terms of latency.

Embracing risks with SLOs and error budgets is about finding the right balance between reliability and innovation. By defining measurable objectives and allowing for a controlled level of risk, teams can build resilient systems that not only meet user expectations but also adapt to changing requirements and market dynamics. The key is to learn from failures, continuously improve, and make data-driven decisions to strike the right balance.

## Service Level Agreements (SLAs)

An SLA is a formal contract between a service provider and its customers, outlining the expected level of service. It defines the agreed-upon quality of service, including performance metrics, availability, and support expectations. In Site Reliability Engineering (SRE), a Service Level Agreement (SLA) plays a crucial role in managing expectations and ensuring a service meets user needs.
Benefits of SLAs

    Clear Communication: SLAs establish a shared understanding between SREs, developers, and stakeholders regarding the expected performance of a service.
    Improved Reliability: Having defined SLAs motivates SREs to proactively monitor and improve the system's reliability to meet the agreed-upon targets.
    Risk Management: Clear SLAs help manage customer expectations and define potential consequences for outages. This allows for proactive planning and mitigation strategies.

Real-world Example

Let's take a look at an example of an SLA in SRE applied to an e-commerce platform.

Scenario: An e-commerce company relies on a critical service called "Product Catalog" to display product information to customers. The SRE team is responsible for ensuring the reliability of this service.

    SLI (Service Level Indicator): Uptime percentage of the Product Catalog service.

    SLO (Service Level Objective): The SLO for uptime could be set at 99.95% over a month. This means the service can be unavailable for a maximum of 43.8 minutes per month (0.05% of the total time).
    SLA (Service Level Agreement): The SLA would be a formal agreement between the SRE team and the e-commerce business stakeholders. It would outline the following the agreed-upon SLO for uptime (99.95%) and the consequences of missing the SLO. For instance, the SLA might specify a service credit for the business team if the uptime falls below 99.95% in a month. This credit could be used to offset the cost of the service due to the downtime.

Benefits in this scenario:

    Clear communication: The SLA keeps everyone aligned. The business team understands the expected reliability of the Product Catalog, and the SRE team has a clear target to strive for.
    Improved reliability: The SLO motivates the SRE team to proactively monitor and improve the Product Catalog service to minimize downtime and avoid service credit payouts.
    Risk management: The SLA defines the potential consequences of outages, allowing the business team to plan for mitigation strategies such as having backup product information available in case the Product Catalog is unavailable.

This is a simplified example, but it illustrates how SLAs translate SRE's focus on reliability into a business-oriented agreement with measurable consequences.

## The 7 Principles of SRE

Site Reliability Engineering (SRE) follows a set of principles that guide the approach to building and maintaining reliable, scalable, and efficient software systems. These principles are key to the SRE philosophy.

    Embracing Risk
    SREs aim to identify the acceptable level of risk and manage it appropriately. No system is ever truly perfect. SRE acknowledges that there will be failures and focuses on minimizing their impact and ensuring fast recovery.
    Service Level Objectives (SLOs)
    A core principle of site reliability engineering (SRE) is the move towards well-defined and well-designed service levels. SLOs define the target level of reliability for a service. They are specific, measurable goals that represent the acceptable level of performance. SLOs provide a clear understanding of user expectations and guide the team in maintaining the desired level of service reliability. In other words, it's not just about setting goals, it's about setting the right goals that effectively measure performance.
    Simplicity
    In SRE, simplicity reigns supreme. Complex systems are like intricate puzzles – prone to errors, challenging to troubleshoot, and demanding in terms of maintenance. Simple systems are easier to manage and adjust, less complexity means quicker fixes and smoother operations, effortless to test and monitor; clearer insights translate to faster problem identification and resolution. Less prone to errors means fewer moving parts reduce the risk of malfunctions. This focus on simplicity translates to a core SRE goal: uneventful operations.
    Toil Automation
    Toil refers to repetitive, manual operational work that does not contribute to the overall stability or improvement of a system. SREs aim to automate toil wherever possible, freeing up time for strategic, high-impact work. Automation reduces errors and allows teams to focus on value-added tasks.
    Monitoring and Alerting
    Effective monitoring and alerting are crucial for identifying and responding to issues promptly. SREs use monitoring tools to collect data on the performance and health of services. Alerts are set up to notify teams when predefined thresholds are breached, enabling quick responses to incidents.
    Capacity Planning
    Capacity planning involves forecasting usage patterns and ensuring that systems can handle current and future loads. SREs aim to prevent both over-provisioning and under-provisioning of resources, striking a balance to ensure optimal system performance and reliability.
    Emergency Response and Blameless Postmortems
    SREs are equipped to respond rapidly and effectively to incidents. The focus is on minimizing downtime and restoring service functionality. A blame-free post-mortem culture is embraced, allowing teams to learn from incidents and implement improvements to prevent future occurrences.
    Instead of focusing solely on fault-finding, incident reviews (often called postmortems) aim to identify the root cause of problems with a different approach. This shift in perspective is reflected in the name itself - a postmortem is less accusatory than a traditional "root cause analysis" (RCA). The goal is to learn from mistakes and improve the system, not to point fingers.
    Postmortems go beyond just identifying the root cause. They also ask crucial questions about how to better detect, respond to, and fix issues faster. This focus on improving response is often a challenge for organizations used to traditional blame-oriented RCAs. Building a "blameless culture" where learning is prioritized is key to getting the most out of postmortems. 

The seven principles of SRE provide a framework for building and operating reliable systems at scale. By focusing on measurable objectives, automation, and a culture of continuous improvement, SRE teams aim to deliver services that meet user expectations while allowing for innovation and adaptation to changing requirements.

Overal DevOps skills:-

1. Agile methodoligies
2. Development experience
3. Troubleshooting prodcuction issues:- Infrastructure,Configurations,Monitoring,CI
4. Cloud,Networking & OS.
5. Communication & Collaboration skills.

Arcjet
Warp

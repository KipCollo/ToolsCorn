# Compute

AWS offers a variety of compute services designed to meet different application needs, from virtual machines to serverless computing. Below are some key AWS compute services:

1. Amazon EC2 (Elastic Compute Cloud):-
    - Provides resizable virtual machines (instances).
    - Offers multiple instance types (e.g., General Purpose, Compute Optimized, Memory Optimized).
    - Supports auto-scaling, load balancing, and elastic IPs.
2. AWS Lambda:-
    - Serverless computing service that runs code in response to events.
    - Supports various languages (Python, Node.js, Java, etc.).
    - Charges based on execution time and memory usage.
3. Amazon ECS (Elastic Container Service);-
    - Fully managed container orchestration for Docker containers.
    - Works with AWS Fargate for serverless container management.
    - Supports integration with AWS networking, security, and monitoring tools.
4. Amazon EKS (Elastic Kubernetes Service)
    - Managed Kubernetes service for containerized applications.
    - Simplifies deployment and scaling of Kubernetes workloads.
    - Integrates with AWS services like IAM, VPC, and CloudWatch.
5. AWS Fargate
    - Serverless compute engine for containers.
    - Eliminates the need to manage infrastructure.
    - Works with both ECS and EKS.
6. AWS Batch
    - Manages and runs batch computing workloads.
    - Dynamically provisions compute resources based on job requirements.
    - Works with EC2 and Spot Instances.
7. Amazon Lightsail
    - Simplified cloud compute for small applications, websites, and databases.
    - Provides virtual servers with pre-configured environments.
    - Includes networking, storage, and security.
8. AWS Outposts
    - Brings AWS compute and storage to on-premises environments.
    - Ideal for hybrid cloud deployments.
    - Works seamlessly with AWS services.
9. AWS Wavelength
    - Provides ultra-low latency computing at the edge of 5G networks.
    - Optimized for applications like IoT, AR/VR, and real-time analytics.
10. AWS Local Zones
    - Extends AWS services closer to users in specific locations.
    - Helps reduce latency for gaming, media, and real-time applications.
11. Amazon Elastic Beanstalk
    - PaaS (Platform-as-a-Service) for deploying and managing applications.
    - Supports multiple programming languages (Java, Python, Node.js, etc.).
    - Automatically handles scaling and deployment.
12. VMware Cloud on AWS
    - Enables running VMware workloads on AWS infrastructure.
    - Supports hybrid cloud strategies.
    - Provides integration with AWS services.

## Amazon EC2

`Amazon Elastic Compute Cloud (EC2)` is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers. EC2’s simple web service interface allows you to obtain and configure capacity with minimal friction. EC2 enables you to scale your compute capacity, develop and deploy applications faster, and run applications on AWS's reliable computing environment. You have the control of your computing resources and can access various configurations of CPU, Memory, Storage, and Networking capacity for your instances.

Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.

Amazon EC2's simple web service interface allows you to obtain and configure capacity with minimal friction. It provides you with complete control of your computing resources and lets you run on Amazon's proven computing environment. Amazon EC2 reduces the time required to obtain and boot new server instances to minutes, allowing you to quickly scale capacity, both up and down, as your computing requirements change.

Amazon EC2 changes the economics of computing by allowing you to pay only for capacity that you actually use. Amazon EC2 provides developers the tools to build failure resilient applications and isolate themselves from common failure scenarios.

EC2 instances are Region-specific. More appropriately, EC2 instances are tied into the Availability Zone you launch them in.
When you choose to launch a new EC2 instance, you must specify the subnet of a VPC in which to launch that EC2 instance. The subnet will be tied to a given Availability Zone

## Instance Types

AWS EC2 instances come in a variety of types optimized to fit different use cases. They are grouped into categories depending on their performance capacity and pricing structure. There are five categories of instance types including General Purpose, Compute Optimized, Memory Optimized, Storage Optimized, and Accelerated Computing instances. Each category is suited best for specific workloads and they consist of different instance types each given a specific name, for example, 't2.micro'. Each instance type has a specific amount of CPU, memory, storage, and network capacity. Understanding the workloads of your applications can help you determine which instance type would be best suited to your needs.

## CPU Credits

AWS EC2 instances earn CPU Credits when they are idle and consume CPU credits when they are active. A CPU credit provides the performance of a full CPU core for one minute. T2 and T3 instances accrue CPU Credits and use them to burst beyond their baseline performance. For example, a t2.micro instance receives credits continuously at a rate of 6 CPU Credits per hour. The credit balance of an instance can be saved for up to 7 days. When the instance does not have any CPU credits, it performs at the baseline. It's important to note that CPU credit pricing is different and additional to the instance pricing. AWS also offers Unlimited mode for instances that need to burst beyond the baseline performance for extended periods.

## Storage / Volumes

In AWS, an Amazon EBS (Elastic Block Store) is the storage volume used by EC2 (Elastic Compute Cloud) instances. It is designed for data durability, and Amazon EBS volumes automatically replicate within their Availability Zone to prevent data loss due to failure of any individual component. EBS volumes are attached to an EC2 instance, and appear as a network drive that you can mount and format using the file system of your choice. You can use Amazon EBS as the primary storage for data that requires frequent updates, such as a system drive for an instance or storage for a database application.

## Keypairs

Key pairs are part of Amazon EC2 and are used to securely log into your instances. A key pair consists of a public key and a private key. Amazon EC2 generates the key pair and gives you the private key, whereas the public key is stored with AWS. When you launch an EC2 instance, you specify the name of the key pair. You can then use the private key to securely connect to your instance. Key pairs are region-specific, meaning you need to create separate key pairs for each region in which you operate your instances.

## Elastic IP

"Elastic IP" in AWS EC2 is a static IPv4 address designed for dynamic cloud computing. An Elastic IP address is associated with your AWS account not a particular instance, and you control that address until you choose to explicitly release it. Unlike traditional static IP addresses, however, Elastic IP addresses allow you to mask the failure of an instance or software by rapidly remapping the address to another instance in your account.

## User Data Scripts

"User Data Scripts" in EC2 instances are used to perform common automated configuration tasks and even run scripts after the instance starts. These scripts run as the root user, and can be used to install software or download files from an S3 bucket. You can pass up to 16 KB of data to an instance, either as plain text or base64-encoded. The User Data script is executed only one time when the instance is first launched. If you stop and start the instance, the script does not run again. However, it will run on every boot if the instance reboots.

An EC2 instance is a virtual server in the AWS Cloud. When you launch an EC2 instance, the instance type that you specify determines the hardware available to your instance. Each instance type offers a different balance of compute, memory, network, and storage resources.

## Features of Amazon EC2

Amazon EC2 provides the following high-level features:

1. Instances - Virtual servers.
2. Amazon Machine Images (AMIs) - Preconfigured templates for your instances that package the components you need for your server (including the operating system and additional software).
3. Instance types - Various configurations of CPU, memory, storage, networking capacity, and graphics hardware for your instances.
4. Amazon EBS volumes - Persistent storage volumes for your data using Amazon Elastic Block Store (Amazon EBS).
5. Instance store volumes - Storage volumes for temporary data that is deleted when you stop, hibernate, or terminate your instance.
6. Key pairs - Secure login information for your instances. AWS stores the public key and you store the private key in a secure place.
7. Security groups - A virtual firewall that allows you to specify the protocols, ports, and source IP ranges that can reach your instances, and the destination IP ranges to which your instances can connect.

Amazon EC2 supports the processing, storage, and transmission of credit card data by a merchant or service provider, and has been validated as being compliant with Payment Card Industry (PCI) Data Security Standard (DSS).

## Access Amazon EC2

You can create and manage your Amazon EC2 instances using the following interfaces:

- Amazon EC2 console - A simple web interface to create and manage Amazon EC2 instances and resources. If you've signed up for an AWS account, you can access the Amazon EC2 console by signing into the AWS Management Console and selecting EC2 from the console home page.
- AWS Command Line Interface - Enables you to interact with AWS services using commands in your command-line shell. It is supported on Windows, Mac, and Linux.
- AWS CloudFormation - Amazon EC2 supports creating resources using AWS CloudFormation. You create a template, in JSON or YAML format, that describes your AWS resources, and AWS CloudFormation provisions and configures those resources for you. You can reuse your CloudFormation templates to provision the same resources multiple times, whether in the same Region and account or in multiple Regions and accounts.
- AWS SDKs - If you prefer to build applications using language-specific APIs instead of submitting a request over HTTP or HTTPS, AWS provides libraries, sample code, tutorials, and other resources for software developers. These libraries provide basic functions that automate tasks such as cryptographically signing your requests, retrying requests, and handling error responses, making it easier for you to get started.
- AWS Tools for PowerShell - A set of PowerShell modules that are built on the functionality exposed by the AWS SDK for .NET. The Tools for PowerShell enable you to script operations on your AWS resources from the PowerShell command line.
- Query API - Amazon EC2 provides a Query API. These requests are HTTP or HTTPS requests that use the HTTP verbs GET or POST and a Query parameter named Action

## Pricing for Amazon EC2

Amazon EC2 provides the following pricing options:

- `Free Tier` - You can get started with Amazon EC2 for free. To explore the Free Tier options, see AWS Free Tier.
- `On-Demand Instances` - On-Demand Instances let you pay for compute capacity by the hour or second with no long-term commitments. This frees you from the costs and complexities of planning, purchasing, and maintaining hardware and transforms what are commonly large fixed costs into much smaller variable costs.
On-Demand Instances are recommended for:
   1. Users that prefer the low cost and flexibility of EC2 without any upfront payment or long-term commitment
   2. Applications with short-term, spiky, or unpredictable workloads that cannot be interrupted
   3. Applications being developed or tested on EC2 for the first time

- `Savings Plans` - Savings Plans is a flexible pricing model that can help you reduce your bill by up to 72% compared to On-Demand prices, in exchange for a commitment to a consistent amount of usage (measured in $/hour) for a 1- or 3-year term.
AWS offers three types of Savings Plans: *Compute Savings Plans, EC2 Instance Savings Plans, and Amazon SageMaker Savings Plans.* Compute Savings Plans apply to usage across Amazon EC2, AWS Lambda, and AWS Fargate.
Savings Plans are recommended for:
   1. Committed and steady-state usage
   2. Users looking to take advantage of the latest compute offerings while continuing to save money

- `Reserved Instances` - You can reduce your Amazon EC2 costs by making a commitment to a specific instance configuration, including instance type and Region, for a term of 1 or 3 years.
- `Spot Instances` - Amazon EC2 Spot Instances let you take advantage of unused EC2 capacity in the AWS cloud and are available at a discount of up to 90% compared to On-Demand prices.
Spot Instances are recommended for:
   1. Fault tolerant or stateless workloads
   2. Applications that can run on heterogeneous hardware
   3. Applications that have flexible start and end times

- `Dedicated Hosts` - A Dedicated Host is a physical EC2 server fully dedicated for your use. Dedicated Hosts can help you reduce costs by allowing you to use your existing server-bound software licenses, including Windows Server, SQL Server, and SUSE Linux Enterprise Server (subject to your license terms). Dedicated Hosts can be purchased On-Demand (hourly) or can be purchased as part of Savings Plans.
Dedicated Hosts are recommended for:
   1. Users looking to save money on licensing costs
   2. Workloads that need to run on dedicated physical servers
   3. Users looking to offload host maintenance onto AWS, while controlling their maintenance event schedules to suit their business’s operational needs

- `On-Demand Capacity Reservations` - On-Demand Capacity Reservations enable you to reserve compute capacity for your EC2 instances in a specific Availability Zone for any duration. Capacity reservations mitigate against the risk of being unable to get On-Demand capacity in case of capacity constraints and ensure that you always have access to EC2 capacity when you need it, for as long as you need it.
On-Demand Capacity Reservations are recommended for:
   1. Business-critical events or workloads that require capacity assurance
   2. Workloads that need to meet regulatory requirements for high availability
   3. Disaster recovery

- `Per-second billing` - EC2 per-second billing removes the cost of unused minutes and seconds from your bill. Focus on improving your applications instead of maximizing hourly usage, especially for instances running over irregular time periods such as dev/testing, data processing, analytics, batch processing, and gaming applications.
EC2 usage is billed in one-second increments, with a minimum of 60 seconds. Similarly, provisioned storage for Amazon Elastic Block Store (Amazon EBS) volumes is billed in per-second increments, with a 60-second minimum. Per-second billing is available for Amazon Linux, Windows, Red Hat Enterprise Linux, Ubuntu, and Ubuntu Pro instances across all Regions and AZs and is applicable across all EC2 purchase models.

- `Amazon EC2 Capacity Blocks for ML`:- With Amazon EC2 Capacity Blocks for ML, you can easily reserve GPU instances for a future date to run your machine learning (ML) workloads. You pay only for the amount of compute time that you need, with no long-term commitment. EC2 Capacity Blocks can be used to reserve Amazon EC2 P5 or P4d instances.
EC2 Capacity Blocks are recommended for:
   1. Training and fine-tuning ML models
   2. Running experiments and building prototypes
   3. Planning for future surges in demand for ML applications

## Estimates, billing, and cost optimization

- To create estimates for your AWS use cases, use the `AWS Pricing Calculator`.
- To estimate the cost of transforming Microsoft workloads to a modern architecture that uses open source and cloud-native services deployed on AWS, use the `AWS Modernization Calculator` for Microsoft Workloads.
- To see your bill, go to the `Billing and Cost Management Dashboard` in the `AWS Billing and Cost Management console`.Your bill contains links to usage reports that provide details about your bill. To learn more about AWS account billing, see AWS Billing and Cost Management User Guide.
- If you have questions concerning AWS billing, accounts, and events, contact `AWS Support`
- To calculate the cost of a sample provisioned environment, see `Cloud Economics Center`. When calculating the cost of a provisioned environment, remember to include incidental costs such as snapshot storage for EBS volumes.
- You can optimize the cost, security, and performance of your AWS environment using `AWS Trusted Advisor`
- You can use AWS Cost Explorer to analyze the cost and usage of your EC2 instances. You can view data up to the last 13 months, and forecast how much you are likely to spend for the next 12 months. For more information, see `Analyzing your costs and usage with AWS Cost Explorer` in the AWS Cost Management User Guide.

**Amazon Machine Images (AMIs)**:-Traditionally, when you are launching a new VM on your on-premises VMware or Hyper-V host, you would specify a particular operating system image (such as an .iso file). This would contain the operating system files necessary to install your VM. You may have also modified the machine image with any additional applications and/or utilities.

AMIs are the AWS equivalent of VM images, containing the baseline operating system and any additional applications.
AMIs are Amazon EBS snapshots or a template of the root volume (for instance, store-backed AMIs). These snapshots or templates contain the operating system and
any necessary applications. In addition, AMIs contain information on block device mappings that specify the volumes to attach to the instance when it is launched.

Amazon offers several pre-configured AMIs as part of its Quick Start AMIs and these include standard operating systems, such as the official versions of various Linux
distributions, including Red Hat Enterprise Linux (RHEL), Ubuntu, SUSE, and even Amazon's flavor called Amazon Linux. In addition, you also have access to several
editions of Microsoft's Windows Server operating system and even macOS, which runs on a physical Apple Mac Mini in the backend.

For each AMI, you also have details of the release number, whether the root device type is EBS or Instance, the type of virtualization
architecture, the volume type (for example, SSD), and if the AMI supports Enhanced Networking.

AMIs offered as part of the Quick Start AMIs come with any necessary licensing built into the cost of the EC2 instance that you deploy that AMI on. While you do not need a separate licensing contract to be drawn up to spin up these servers, the hourly charge you pay to Amazon will include the licensing cost.

Note, however, that the licensing that comes with any AMI is only for what is already bundled as part of the image. Any additional configurations or the installation of
additional applications may carry further licensing requirements that need to be procured separately.
When you select a particular AMI as part of configuring a new EC2 instance, the image is extracted to the instance's newly attached block storage volume and made bootable. This, in turn, configures the EC2 instance as a fully functioning server.
Some additional points to be aware of about AMIs include the following:-

1. AMIs are Region-specific. This means that if you want to launch a particular instance configuration in a Region, the AMI must be available in that Region.
2. AMIs can be copied across Regions if you need to launch a specific configuration in a Region and the required AMI is not available in that Region.

In addition to the Quick Start AMIs, you have other sources to obtain these machine images. These include the following:

- `AWS Marketplace`: This is a software store managed by AWS where third-party vendors can sell their applications, often bundled as ready-to-use AMIs. Companies
such as F5, Citrix, Oracle, and McAfee, among many others, sell their solutions, which can be launched with Amazon EC2 instances. Pricing is according to the
owner of the AMI, plus the cost of the specific EC2 instance type you are running the AMI on. You can review the AWS Marketplace offering at https://aws.amazon.com/marketplace.
- `Community AMIs`: It is possible to make your AMIs public and thus make them accessible to the wider community via the Community AMI link. There
are thousands of different AMIs designed to address specialized software and operating system bundles that are not generally available via the Quick Start AMIs
or Marketplace. You can often find a more specific Linux distribution here such as CentOS, which is a very popular AMI that businesses use to host applications.
Community AMIs are free to use but you pay for the EC2 instance charge. In addition, many AMIs are provided "as-is," with no additional support, so caution
would be required when selecting a Community AMI.

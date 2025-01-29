# AWS

Amazon Web Services (AWS), a subsidiary of Amazon, is the largest public cloud-computing provider in the world. It offers over 175 distinct services to its clients
from its data centers located across the globe. These services are accessible over the internet (with some on-premises options available as well) on a metered pay-as-you-go
model.

AWS (Amazon Web Services) offers a broad set of global cloud-based products including compute, storage, databases, analytics, networking, mobile, developer tools, management tools, IoT, security, and enterprise applications: on-demand, available in seconds, with pay-as-you-go pricing. From data warehousing to deployment tools, directories to content delivery, over 200 AWS services are available. New services can be provisioned quickly, without the upfront fixed expense. This allows enterprises, start-ups, small and medium-sized businesses, and customers in the public sector to access the building blocks they need to respond quickly to changing business requirements. This whitepaper provides you with an overview of the beneﬁts of the AWS Cloud and introduces you to the services that make up the platform.

AWS (Amazon Web Services) offers a broad set of global cloud-based products including compute, storage, databases, analytics, networking, mobile, developer tools, management tools, IoT, security, and enterprise applications: on-demand, available in seconds, with pay-as-you-go pricing. From data warehousing to deployment tools, directories to content delivery, over 200 AWS services are available. New services can be provisioned quickly, without the upfront fixed expense. This allows enterprises, start-ups, small and medium-sized businesses, and customers in the public sector to access the building blocks they need to respond quickly to changing business requirements. This whitepaper provides you with an overview of the beneﬁts of the AWS Cloud and introduces you to the services that make up the platform.

## AWS Global Infrastructure

AWS Global Infrastructure refers to the layout of AWS regions and availability zones around the world. A region is a geographical area, each consisting of two or more availability zones (AZs) which are engineered to be isolated from failures in other AZs. AZs provide inexpensive, low-latency network connectivity to other AZs in the same region. In addition to the regions and AZs, AWS also includes edge locations for content delivery and regional edge caches, enhancing user experience by reducing latency. AWS currently operates in many geographic regions around the world.

The Global Infrastructure gives you access to AWS data centers across different continents, enabling you to build highly available, fault-tolerant, and scalable solutions for your customers.In addition, you can also ensure that you place workloads closer to the location of your customers and fulfill any compliance or regulatory requirements.
This key offering from AWS enables you to access and launch resources across different Regions. An in-depth understanding of this will help you meet your clients' requirements—adherence to regulatory and compliance requirements, disaster recovery (DR) solutions, and even cost savings—all leading to a better customer experience.

The AWS Global Infrastructure comprises multiple data centers that house all the servers,storage devices, and networking equipment across different geographical regions around the globe.As AWS continues to expand its global footprint, it builds additional data centers, which ultimately leads to an increase in the number of Regions accessible to its customers.

An AWS Region is a physical location where AWS will host a cluster of data centers.Within a given Region, these data centers are built such that small groups of the larger
cluster are logically and physically separated from each other by a distance that falls within 100 kilometers (km) (60 miles) of each other.
These logically and physically separated groups of data centers form what we call Availability Zones (AZs).AWS currently spans 77 AZs within 24 geographical regions around the world, and has announced plans for 18 more AZs and 6 more AWS Regions in Australia, India, Indonesia, Japan, Spain, and Switzerland.

**Regions** - A Region will consist of a minimum of two AZs, and many even consist of three or more.The North Virginia Region (N. Virginia or us-east-1) consists of six AZs. Usually,when AWS launches a new service, it is first deployed in the North Virginia Region.

AWS's multi-Region strategy enables you (the customer) to derive the following benefits:
• Identify infrastructure resources closer to your end users, where you can host your application and reduce network latency, resulting in a good user experience (UX)
• Identify infrastructure within political and national borders to adhere to strict data sovereignty and compliance regulations
• Isolate groups of resources from each other to allow you to fulfill any failover or DR scenarios in case major regional outages occur

**AZs** - AZs are the logical and physical grouping of data centers within a given Region. Each Region will have two or more AZs, as mentioned earlier. An AZ is a logical representation of a metropolitan area where AWS has deployed one or more data-center facilities. These data centers will house hardware components such as servers, storage, and network equipment, all fitted with redundant power, connectivity, cooling, and security controls.

The primary purpose of having multiple AZs is to offer customers the opportunity to build highly available, fault-tolerant, and scalable solutions. This is made possible by
the fact that the AZs within a Region are connected to each other over high-bandwidth, low-latency private metro-fiber links, delivering high throughput connections between
the zones.

**Edge locations** - Hosts the physical server infrastructure, massive amounts of storage devices, and high-bandwidth networking equipment. In addition, AWS edge computing services provide infrastructure and software that enable data to be processed and analyzed closer to the end customer. This includes deploying AWS-managed hardware and software to locations outside AWS data centers, and even onto customer-owned devices themselves.

Edge locations are connected to AWS Regions through the AWS backbone network.This comprises fully redundant, multiple 100 Gigabit Ethernet (GbE) parallel fiber
connections that substantially improve throughput and offer low-latency connectivity.

## Global services

There are some services that fall under the category of global services.The reason for these few services being presented as global services is that you want the resources created in those services to be accessible globally and, in many cases, to be unique across all Regions within your AWS account.

• AWS IAM—A service offered by AWS to enable you to grant access to services and resources in your AWS Account. AWS IAM allows you to create IAM users for your staff who need access to those services, define permissions, configure groups, and set up roles.
• Amazon CloudFront—A CDN service that allows you to create distribution points for your content for a specific origin server. The Amazon CloudFront services will cache content locally at edge locations closest to those users who request access to your content.
• Amazon Route 53—A highly available, scalable, and fully managed cloud Domain Name System (DNS). You can use Amazon Route 53 to register new domain names, configure domain records, and design global routing policies for various use cases, such as an active/passive solution for building a highly available solution.
• Amazon S3—Although Amazon S3 buckets need to be created in each Region and those buckets are therefore Region-specific, the service itself is presented as a global
service. When you access the Amazon S3 console, you do not need to select a given region.

In addition to global and regional services, AWS also offers certain services that are meant to be consumed on premises. These include services that can be used to build hybrid cloud models or assist in the migration of your on-premises workloads to AWS.

## On-premises services

Although AWS is a public cloud vendor, they also provide certain services that are hosted at their clients' data centers on-premises. This enables clients to bring the management capabilities of AWS services for certain services to their local data centers.
Some on-premises services are intended to also facilitate a hybrid cloud deployment solution, whereas other on-premises services can be used to help migrate data from local
data centers to the AWS cloud via offline routes where bandwidth constraints may be an issue. Another reason for such on-premises offerings is that it helps address the needs of certain clients who have strict data-residency laws.

Some services that are designed to be hosted or consumed on-premises include the
following:
• Amazon Snow Family—These are physical enclosure units that contain solid-state drives (SSDs), compute hardware, and networking components that are shipped to client sites. The AWS Snow Family comprises Snowball Edge Devices, Snowcone,and Snowmobile. They can be used for copying terabytes (TB) of data to petabytes (PB) of data onto the devices, which can be returned to AWS so that the data can be copied into Amazon S3. They also offer compute capability so that data can be processed and analyzed as required while it is being copied to the devices.
• Amazon Storage Gateway—This enables users to connect their on-premises storage with Amazon S3, offering different gateway options designed to enable offloading of their storage data to Amazon S3. They will continue to have seamless connectivity to that data from their on-premises servers. Depending on the configuration option chosen, Amazon Storage Gateway can maintain a small subnet of frequently accessed data locally, with the bulk of that data in Amazon S3, reducing the total storage hardware needed on premises, which leads to lower capital costs. Alternatively, if on-premises applications are extremely sensitive to network latency, then the Amazon Storage Gateway service can provide data backup capabilities, with the ability to send snapshots of locally stored data to Amazon S3.
• Amazon Outposts—This is a 42U rack that can scale from 1 rack to 96 racks to create pools of compute and storage capacity, hosted at your local data center. The U refers to rack units or "U-spaces" and is equal to 1.75 inches in height. A standard height is 48U (a 7-foot rack). Amazon Outposts offers all the management software and capabilities of AWS to manage your EC2 instances, as well as storage and RDS database services locally on-premises.
This enables low-latency connectivity, local data processing, and adherence to local data-residency requirements. Other services that can be run locally on Amazon Outposts are Elastic Container Service (ECS), Elastic Kubernetes Service (EKS), and Elastic MapReduce (EMR) clusters. Yet another service that you can run locally in your data center is host-object storage services using Amazon S3 on Outposts. This can help you meet your local data-processing and data-residency needs.

## Shared Responsibility Model

In Amazon Web Services (AWS), the concept of 'Shared Responsibility' pertains to the distribution of security and compliance responsibilities between AWS and the user/client. Under this model, AWS is responsible for the security "of" the cloud — including the infrastructure, hardware, software, networking, and facilities that run AWS cloud services. On the other hand, the user is responsible for security "in" the cloud — this includes managing and configuring the customer-controlled services, protecting account credentials, and securing customer data. This shared model aims to lessen operational burden for users and provide flexible security controls.

## Well Architected Framework

AWS Well-Architected Framework is a set of strategic guidelines provided by Amazon Web Services. It is designed to provide high-performing and resilient systems while maintaining cost efficiency. The framework divides the architectural best practices across six pillars which include operational excellence, security, reliability, performance efficiency, cost optimization and the sustainability. With this framework, you can assess and improve your cloud-based architectures and applications by leveraging AWS technologies.

## AWS support plan

There are four support plans on offer from AWS:-

1. Basic support plan:- The Basic support plan is completely free and offers customer support for any account-related issues such as bill payment or if you have issues logging in to your account. You also get access to publicly available documentation, whitepapers, and support forums. You can access the Basic support services via email, chat, and phone 24/7, and the phone support involves getting Amazon to call you on your landline or mobile—so, they pay the call charges.
2. Developer support plan:-
3. Business support plan:-
4. Enterprise support plan:-

You can create and manage resources on the AWS Cloud in three ways:
• AWS Management Console – The console provides a rich graphical interface to a majority of the features that AWS offers. (Occasionally, new features might not have all of their capabilities included in the console when the feature initially launches.) For mobile access, you can use the AWS Console Mobile App to quickly view AWS resources anytime from anywhere.
• AWS Command Line Interface (AWS CLI) – The AWS CLI provides a suite of utilities that can be launched from a command script in Linux, macOS, or Microsoft Windows.
• AWS Software Development Kits (SDKs) – AWS provides packages that permit access to AWS in various popular programming languages. These packages facilitate the use of AWS in your existing applications. You can also use them to create applications that deploy and monitor complex systems entirely through code.

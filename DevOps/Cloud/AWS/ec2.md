# EC2

Amazon Elastic Compute Cloud (EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers. EC2’s simple web service interface allows you to obtain and configure capacity with minimal friction. EC2 enables you to scale your compute capacity, develop and deploy applications faster, and run applications on AWS's reliable computing environment. You have the control of your computing resources and can access various configurations of CPU, Memory, Storage, and Networking capacity for your instances.

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

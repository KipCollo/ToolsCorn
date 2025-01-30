# Amazon Storage

AWS offers different storage options.Amazon Simple Storage Service (Amazon S3). Amazon S3 is an object storage solution and offers very high levels of availability, durability, and scalability. AWS also offers other types of storage options.

A storage service provides the necessary infrastructure to enable you to store and access data. However, different use cases require varied storage architectures to ensure
performance, reliability, durability, and the right type of access to the data. There are three primary storage options available, and AWS offers services to cater to each of these.

- **Block storage**:- Block storage is an architectural design that enables the storage of data onto media such as a hard disk, in fixed-sized chunks. Data is broken up into small blocks and placed on the media in these chunks, with a unique address assigned that forms part of its metadata.
Block storage makes use of a management software (which can be part of the operating system) to organize the blocks of data. When a user tries to retrieve a file, the management software identifies the blocks to retrieve, reassembles the data, and presents the whole file to the user.

On AWS, block storage options are available as Elastic Block Store (EBS). These can be configured as volumes attached to your Elastic Compute Cloud (EC2) instances and offer ultra-low latency required for high-performance workloads. One advantage of EBS volumes is that they are not directly attached to the EC2 instance you deploy, but instead are connected via high-speed network links. This allows you to detach an EBS volume from one EC2 instance and attach it to another if, for example, the first EC2 instance experiences some sort of failure.
Typical use cases include running and managing system files such as those used by your operating system, large databases, or for applications such as enterprise resource
planning (ERP) solutions. These types of applications require very low-latency access to the data and generally make use of direct-attached storage (DAS) or storage area
networks (SANs).

**File storage**:- The architecture offers a centralized location for your corporate data, and files are stored in folders and sub-folders. File storage offers a hierarchical structure to store your data, and this means you can imitate your real-life counterpart—the filing cabinet—to organize your data.
Retrieval of the data requires you to know the file and folder structure and provide this information. For example, if I need last August's balance sheet Excel document, I will need to look in the 2020 folder and the August sub-folder, and this would enable me to retrieve that specific data.

Amazon offers three different file storage systems, outlined as follows:

1. Elastic File System (EFS)—This is a managed elastic filesystem designed to let you share file data without provisioning or managing storage as you would with EBS.
Your filesystem will grow and shrink as you add and remove data, and mount points can only be created on Linux EC2 instances.
2. FSx for Lustre—A high-performance filesystem designed for applications that require fast storage and can scale to hundreds of gigabytes (GB) of throughput
and millions of input/output operations per second (IOPS). FSx for Lustre is also designed for a wide range of Linux-based EC2 instances.
3. FSx for Windows File Server—Designed for Microsoft Windows EC2 instances and offers a fully managed file-share solution, natively supporting the Windows
file system such as the industry-standard Server Message Block (SMB) protocol.Typical use cases include file-sharing services, local archiving, application data sharing, and data protection.

**Object storage**:- object storage involves storing complete files as individual objects. Object storage presents a flat file structure—you create some form of container and place your objects within this container without using any folder or file-level hierarchy. This is also known as unstructured data. Object storage metadata (information about the object—such as its name, and so on), along with other attributes, is then used to create a unique identifier to easily locate that data in your storage pool. Due to the nature of object storage, the metadata can contain a vast array of information, enabling you to use object storage for data analytics far more easily than a file-based storage solution.

Typical use cases for object storage include storing digital assets for your websites and applications (documents, images, video), the ability to perform analytics on your
objects, and offering storage solutions to cutting-edge technologies such as Internet of Things (IoT).

## Amazon S3

Customers can use Amazon S3 to store any amount of data for a wide range of use cases, including digital media content for websites, data lakes, mobile applications, IoT device data, and big data analytics.

Amazon S3 (Simple Storage Service) is an object storage service offered by Amazon Web Services (AWS). It provides scalable, secure and durable storage on the internet. Designed for storing and retrieving any amount of data from anywhere on the web, it is a key tool for many companies in the field of data storage, including mobile applications, websites, backup and restore, archive, enterprise applications, IoT devices, and big data analytics.

Buckets / Objects:- In AWS S3, a "bucket" is a container for data. It is used to store objects. The objects include files or, more technically, any type of data that can be stored in the form of files. In terms of hierarchy, buckets are at the top level in AWS S3. Inside these buckets, you can store any number of objects. An object consists of a file and optionally any metadata that describes that file. It's important to note that you can also store folders within these buckets and inside these folders, you can again store objects. Object keys are unique within a bucket and they help in identifying and retrieving the object.

Bucket / Object Lifecycle:- AWS S3 Lifecycle is a feature within the AWS S3 resources that allows users to manage their objects so that they are automatically transferred to different storage classes or expire at the end of their lifetimes. It facilitates transitioning objects between different storage classes at set times or according to specified conditions, and can also automate the cleanup of expired objects to help reduce storage consumed by obsolete data. A lifecycle can be applied to a bucket or a subset of objects. Note that each transition or expiration activity is a separate action within the lifecycle.

# Database

Databases are designed to do more than simply store data, however. Depending on the type of database, data can be organized and stored in a structured or semi-structured manner, offer high-speed access to the data, and give you the ability to perform queries and scans against the data.

Data can also be combined from different tables within the database to help you create complex analytics and reporting.
AWS offers three primary database solutions and several others for specific application types:-

1. relational
2. NoSQL
3. caching

## Managed databases versus unmanaged databases

`unmanaged databases`:- On AWS, you can set up an Elastic Compute Cloud (EC2) instance and install your database, such as Microsoft SQL Server or Oracle. In this case, you take full ownership of managing the database, provisioning the required amount of Elastic Block Store (EBS) volumes for storage, and ensuring adequate backups are made. You also need to design for high availability and performance.

`Managed databases`:- AWS takes care of provisioning your database instances, where you specify certain parameters to ensure the required capacity for your application. AWS will also provision and manage the required storage for your database, as well as perform all backups and replications as required.
Ultimately, you get a fully managed solution where AWS takes care of almost every configuration option you choose, except for ensuring that your application is optimized for the chosen database solution.

## Amazon Relational Database Service (Amazon RDS)

Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and scale a relational database in the AWS Cloud. It provides cost-efficient, resizable capacity for an industry-standard relational database and manages common database administration tasks.

Amazon RDS offers traditional relational databases as fully managed services on the AWS platform. Ideal for transactional database requirements, also known as OLTP, AWS offers six different database engines, as follows:

1. MySQL
2. PostgreSQL
3. MariaDB
4. Microsoft SQL server
5. Oracle
6. Amazon Aurora

When you choose to set up an Amazon RDS database, you are setting up a database instance with a chosen engine to run on that instance. You can then create one or more databases supported by that engine on your database instance. This means you can have several databases running on an individual database instance.

- Furthermore, when you set up a database instance, you specify hardware capabilities in the form of CPU and memory allocation. The type of instance
will also determine the maximum storage bandwidth and network performance that the instance can offer. AWS offers three different types of instance classes with varying virtual hardware specifications and is designed for various uses cases. These are as follows:
   1. `Standard classes (includes m classes)`: These classes offer a balance of compute,memory, and network resources, and they are ideal for most application
   requirements. Standard classes offer the following specs:
      - Between 2 and 96 vCPUs
      - Up to 384 GB of memory
   2. `Memory-optimized classes (includes r and x classes)`: These classes are ideal for most demanding applications that require greater levels of memory and are optimized for memory-intensive applications. Memory-optimized classes offer the following specs:
      - Between 4 and 128 vCPUs
      - Up to 3,904 GB of memory
   3. `Burstable classes (includes t classes)`: These classes are designed for nonproduction databases and provide a baseline performance level, with the ability to burst to full CPU usage. Burstable classes are ideal for database workloads with moderate CPU usage that experience occasional spikes. Burstable classes offer the following specs:
      - Between 1 and 8 vCPUs
      - Up to 32 GB of memory

## Amazon Aurora

Amazon Aurora is AWS's proprietary MySQL- and PostgreSQL-compatible database solution and was designed for enterprise-grade production environments. Amazon Aurora comes with a vast array of features that enable you to design your database solution with high availability, scalability, and cost-effective deployments to suit a variety of business needs.

Amazon Aurora is architected to offer high resilience, with copies of the database placed across a minimum of three Availability Zones, It is up to five times faster than standard MySQL databases and three times faster than standard PostgreSQL databases.

The service offers fault tolerance and self-healing storage capabilities that can scale up to 128 TB per database instance. Amazon Aurora also offers the ability to host up to 15 low latency read replicas.


## Amazon DynamoDB

Amazon offers a fully managed non-relational database solution called Amazon DynamoDB.
DynamoDB is offered as a serverless solution because you do not need to define any database instance configuration, such as CPU or memory configuration. Amazon
manages the underlying infrastructure that hosts the DynamoDB service.

DynamoDB is a regional service just like Amazon RDS, but it comes with higher levels of scalability and high availability.

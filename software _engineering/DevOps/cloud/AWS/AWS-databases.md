# Database

Databases are designed to do more than simply store data, however. Depending on the type of database, data can be organized and stored in a structured or semi-structured manner, offer high-speed access to the data, and give you the ability to perform queries and scans against the data.

Data can also be combined from different tables within the database to help you create complex analytics and reporting.
AWS offers three primary database solutions and several others for specific application types:-

1. Relational
2. NoSQL
3. Caching


- **Managed databases versus unmanaged databases**:-
   1. `unmanaged databases`:- On AWS, you can set up an Elastic Compute Cloud (EC2) instance and install your database, such as Microsoft SQL Server or Oracle. In this case, you take full ownership of managing the database, provisioning the required amount of Elastic Block Store (EBS) volumes for storage, and ensuring adequate backups are made. You also need to design for high availability and performance.
   2. `Managed databases`:- AWS takes care of provisioning your database instances, where you specify certain parameters to ensure the required capacity for your application. AWS will also provision and manage the required storage for your database, as well as perform all backups and replications as required.
   Ultimately, you get a fully managed solution where AWS takes care of almost every configuration option you choose, except for ensuring that your application is optimized for the chosen database solution.


## Amazon Relational Database Service (Amazon RDS)

Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and scale a relational database in the AWS Cloud. It provides cost-efficient, resizable capacity for an industry-standard relational database and manages common database administration tasks.

The basic building block of Amazon RDS is the `DB instance`. In a DB instance, you create your databases. A DB instance provides a network address called an `endpoint`. Your applications use this endpoint to connect to your DB instance. When you create a DB instance, you specify details like storage, memory, database engine and version, network conﬁguration, security, and maintenance periods. You control network access to a DB instance through a security group.
VPC security groups provide access to DB instances in a VPC. They act as a ﬁrewall for the associated DB instance, controlling both inbound and outbound traﬃc at the DB instance level. DB instances are created by default with a ﬁrewall and a default security group that protect the DB instance.

For example, suppose that you have an application that accesses a database on your DB instance in a VPC. In this case, you must add a custom TCP rule that speciﬁes the port range and IP addresses that your application uses to access the database. If you have an application on an Amazon EC2 instance, you can use the security group that you set up for the Amazon EC2 instance.
You can set up network connectivity between an Amazon EC2 instance and a DB instance automatically when you create the DB instance.

*RDS DB instances* - A DB instance is an isolated database environment running in the cloud. It is the basic building block of Amazon RDS. A DB instance can contain multiple user-created databases, and can be accessed using the same client tools and applications you might use to access a standalone database instance.
DB instances are simple to create and modify with the AWS command line tools, Amazon RDS API operations, or the AWS Management Console.

NOTE - Amazon RDS supports access to databases using any standard SQL client application. Amazon RDS does not allow direct host access.

Each DB instance has a DB instance identiﬁer. This customer-supplied name uniquely identiﬁes the DB instance when interacting with the Amazon RDS API and AWS CLI commands. The DB instance identiﬁer must be unique for that customer in an AWS Region.
The DB instance identiﬁer forms part of the DNS hostname allocated to your instance by RDS. For example, if you specify db1 as the DB instance identiﬁer, then RDS will automatically allocate a DNS endpoint for your instance. An example endpoint is db1.abcdefghijkl.us-east-1.rds.amazonaws.com, where db1 is your instance ID.

Amazon RDS offers traditional relational databases as fully managed services on the AWS platform. Ideal for transactional database requirements, also known as OLTP, AWS offers six different database engines, as follows:

1. MySQL
2. PostgreSQL
3. MariaDB
4. Microsoft SQL server
5. Oracle
6. Amazon Aurora

When you choose to set up an Amazon RDS database, you are setting up a database instance with a chosen engine to run on that instance. You can then create one or more databases supported by that engine on your database instance. This means you can have several databases running on an individual database instance.

Amazon RDS creates a master user account for your DB instance as part of the creation process.This master user has permissions to create databases and to perform create, delete, select, update, and insert operations on tables the master user creates. You must set the master user password when you create a DB instance, but you can change it at any time using the AWS CLI, Amazon RDS API operations, or the AWS Management Console. You can also change the master user password and manage users using standard SQL commands.

*DB instance classes* - The DB instance class determines the computation and memory capacity of an Amazon RDS DB instance. The DB instance class that you need depends on your processing power and memory requirements.
A DB instance class consists of both the DB instance class type and the size. For example, db.r6g is a memory-optimized DB instance class type powered by AWS Graviton2 processors. Within the db.r6g instance class type, db.r6g.2xlarge is a DB instance class. The size of this class is 2xlarge.

Amazon RDS supports DB instance classes for the following use cases:
1. General-purpose
2. Memory-optimized
3. Compute-optimized
4. Burstable-performance
5. Optimized Reads

- Furthermore, when you set up a database instance, you specify hardware capabilities in the form of CPU and memory allocation. The type of instance will also determine the maximum storage bandwidth and network performance that the instance can offer. AWS offers three different types of instance classes with varying virtual hardware specifications and is designed for various uses cases. These are as follows:
   1. `Standard classes (includes m classes)`: These classes offer a balance of compute,memory, and network resources, and they are ideal for most application requirements. Standard classes offer the following specs:
      - Between 2 and 96 vCPUs
      - Up to 384 GB of memory
   2. `Memory-optimized classes (includes r and x classes)`: These classes are ideal for most demanding applications that require greater levels of memory and are optimized for memory-intensive applications. Memory-optimized classes offer the following specs:
      - Between 4 and 128 vCPUs
      - Up to 3,904 GB of memory
   3. `Burstable classes (includes t classes)`: These classes are designed for nonproduction databases and provide a baseline performance level, with the ability to burst to full CPU usage. Burstable classes are ideal for database workloads with moderate CPU usage that experience occasional spikes. Burstable classes offer the following specs:
      - Between 1 and 8 vCPUs
      - Up to 32 GB of memory

Creating a DB instance and connecting to a database on a DB instance is slightly diﬀerent for each of the DB engines.



## Amazon Aurora

Amazon Aurora is AWS's proprietary MySQL- and PostgreSQL-compatible database solution and was designed for enterprise-grade production environments. Amazon Aurora comes with a vast array of features that enable you to design your database solution with high availability, scalability, and cost-effective deployments to suit a variety of business needs.

Amazon Aurora is architected to offer high resilience, with copies of the database placed across a minimum of three Availability Zones, It is up to five times faster than standard MySQL databases and three times faster than standard PostgreSQL databases.

The service offers fault tolerance and self-healing storage capabilities that can scale up to 128 TB per database instance. Amazon Aurora also offers the ability to host up to 15 low latency read replicas.


## Amazon DynamoDB

Amazon offers a fully managed non-relational database solution called Amazon DynamoDB.
DynamoDB is offered as a serverless solution because you do not need to define any database instance configuration, such as CPU or memory configuration. Amazon manages the underlying infrastructure that hosts the DynamoDB service.

DynamoDB is a regional service just like Amazon RDS, but it comes with higher levels of scalability and high availability.

# AWS Services

AWS service categories

- Compute - Services replicating the traditional role of local physical servers for the cloud, offering advanced configurations including autoscaling, load balancing, and even serverless architectures (a method for delivering server functionality with a very small footprint)
- Networking - Application connectivity, access control, and enhanced remote connections
- Storage - Various kinds of storage platforms designed to fit a range of both immediate accessibility and long-term backup needs
- Database - Managed data solutions for use cases requiring multiple data formats: relational, NoSQL, or caching
- Application management - Monitoring, auditing, and configuring AWS account services and running resources
- Security and identity - Services for managing authentication and authorization, data and connection encryption, and integration with third-party authentication management systems
- Application integration - Tools for designing loosely coupled, integrated, and API-friendly application development processes
- Analytics
- Media Services
- Customer Engagement
- Games
- Internet of Things
- Analytics
- Application Integration
- Artificial Intelligence
- Business Applications
- Cloud Financial Management
- Contact Center
- Containers
- Developer Tools
- End User Computing
- Front-End Web & Mobile
- Management & Governance
- Media Services
- Migration & Modernization
- Networking & Content Delivery
- Quantum Technologies
- Satellite
- Security, Identity, & Compliance
- Serverless
- Supply Chain
- Web3

1. Amazon S3:- Object storage service for storing and retrieving data with high scalability and durability.Done by creating a bucket,uploading objects and setting permissions or lifecycle policies via the console,CLI or SDK.
2. Amazon RDS:- Managed relational database service supporting MySQL,PostgreSQL,MariaDB,Oracle and SQL Server.Done by launching a database instance,configuring storage and compute capacity and automating backups and updates.
3. Amazon CloudFront:- Content Delivery Network(CDN) that delivers content with low latency and high transfer speeds
4. AWS IAM
5. Amazon VPC
6. Amazon EC2
7. Amazon DynamoDB
8. AWS Lambda
9. Amazon SNS
10. Amazon SQS
11. AWS CloudTrail
12. Amazon CloudWatch
13. AWS Elastic Beanstalk
14. AWS Systems Manager
15. Amazon Route 53
16. AWS CodePipeline
17. AWS Glue
18. AWS Fargate
19. Amazon EKS
20. Amazon ElastiCache
21. AWS AppSync
22. Amazon RDS
23. AWS KMS
24. Amazon QuickSight
25. AWS Secrets Manager
26. AWS Config
27. Amazon Redshift
28. Amazon cloudFront
29. AWS Step Functions
30. Amazon SageMaker
31. Amazon Inspector
32. AWS Elastic Beanstalk
33. Amazon Aurora
34. Amazon Route 53
35. AWS WAF
36. AWS Lambda
37. Amazon S3
38. Amazon SNS
39. AWS Systems Manager
40. Amazon SQS
41. AWS Cost Explore
42. AWS Batch
43. AWS Direct Connect
44. AWS CloudFormation
45. Amazon ECR
46. Amazon ELB
47. AWS Global Accelerator
48. Amazon EFS
49. AWS Snowball
50. Amazon ElastiCache

## Identity and Access Management

AWS Identity and Access Management (IAM) service:- AWS IAM is an authentication and authorization service that enables you to decide who or what can access the AWS services in your account (known as authentication), and what these entities are permitted to do in your account (known as authorization).

The email address that you have used to create the account is also known as the root user. The root user is the person who created the account and holds the keys to the kingdom. This privileged user must be guarded well, and knowledge of its credentials (passwords and so on) should not be given to anyone who is not authorized to use it. The root user should also not be used for day-to-day operations. You can create additional user accounts (what we call IAM users) to perform daily tasks.

To access any AWS service, including the IAM service, you can either use the web-based management console, the command-line interface (CLI), or AWS SDKs if you are writing code.

**The AWS IAM console** -To use AWS Management Console. Log in to your AWS account using your root user credentials and you will be presented with a splash screen.
AWS IAM falls under the Security, Identity, & Compliance category.

The first time you navigate to the IAM console, you will note some security alerts and a list of best practices to follow.You will also note a sign-in URL for IAM users in this account. This is a special URL that your IAM users can browse to access your account. This URL is customizable and you can replace the series of digits shown after the https:// portion with a custom name that is easier to remember.

Simply click the Customize link after the URL and choose an appropriate name for your AWS account, for example, PacktDevAccount.Names chosen must be unique and you may need to associate a common name with your company name to create a name that is unique.

Once you have customized your IAM sign-in URL, you can provide this link to other IAM users, who can use it to sign in to your account. This can only happen if your users
have an IAM user account to sign in with.

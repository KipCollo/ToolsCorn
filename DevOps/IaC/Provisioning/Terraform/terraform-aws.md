# Terraform with AWS

## Provider Block in Terraform

The provider block in Terraform with AWS is used to configure the AWS provider, enabling communication with the AWS API. It authenticates
to AWS, sets the region, and provides access to various AWS resources.

To specify the AWS provider, use the `provider` block in the Terraform configuration file with the necessary AWS access credentials and the desired region.
You can use multiple AWS provider blocks in a single configuration file to work with resources in different AWS accounts or regions.

Terraform uses the AWS credentials provided through environment variables, shared credentials file, or EC2 instance profiles to authenticate with AWS.
To enhance security, store AWS credentials in environment variables or use an IAM role attached to an EC2 instance when running Terraform from within an EC2 instance.

If the region is not specified in the provider block, Terraform will use the default region specified in the AWS configuration, or it will fall back to the `us-east-1` region.

```tf
provider "aws"{
   access_keys = ""
}
```

## Resource Blocks in Terraform

Resource Blocks in Terraform are used to define individual infrastructure resources, such as EC2 instances or S3 buckets, in the AWS
cloud. They represent a specific AWS service and its configuration options.

The "name" attribute in AWS Resource Block is an optional identifier used to name the resource created in AWS. It helps in identifying resources within AWS and
simplifies management.

To reference attributes from one AWS resource within another resource's configuration you can use the Terraform interpolation syntax to reference attributes.
For example, "${aws_instance.example.public_ip}" retrieves the public IP of an EC2 instance named "example."

To handle sensitive information, such as AWS access keys or passwords, when defining Resource Blocks use Terraform variables and secure them using environment variables or a secret management tool like AWS Secrets Manager.

`EC2 instance`:- To create an EC2 instance, you would define a resource block of type "aws_instance" and specify the necessary attributes, such as the AMI ID,
instance type, security groups, etc.

```tf
resource "aws_instance" "my-ec2"{

}
```

## Remote State Management

Remote state management involves storing the Terraform state file in a shared location (e.g., S3) to enable collaboration and maintain consistency among team members. It helps avoid conflicts when multiple people work on the same infrastructure code.

To configure Terraform to use a remote backend for state storage in AWS, you define the backend configuration in the `terraform` block, specifying the backend type (e.g., "s3") and the required configuration details like bucket name and key.

The benefits of using S3 as the remote state backend for Terraform in AWS is that S3 provides high availability, durability, and scalability, making it an
excellent choice for storing Terraform state. It also integrates well with AWS IAM, allowing fine-grained access control.

Terraform automatically manages versioning for the state file in S3.Each state file change is stored as a separate object, allowing you to rollback to previous versions if needed.

Security considerations should you keep in mind when using remote state with AWS is to Ensure proper IAM policies are applied to control access to the S3
bucket containing the state file. Use least privilege principles and implement encryption (e.g., S3 server-side encryption) for added security.

To migrate an existing local state to a remote backend in AWS, Terraform provides a `terraform state mv` command to move resources from the local state to the remote state. By running this command, you can safely transfer the state to S3.

State locking is a mechanism that prevents multiple Terraform runs from modifying the same state file at the same time. It ensures data integrity
and avoids conflicts when multiple users are applying changes.

You can use DynamoDB as a lock mechanism for S3-based remote state. This helps prevent concurrent Terraform runs from modifying the same state simultaneously, avoiding potential corruption.To enable state locking with S3 as the remote state backend, you configure a DynamoDB table and adding the `dynamodb_table` attribute to your S3 backend configuration in Terraform.

If the state file is deleted, Terraform loses track of the resources it managed. It is crucial to have backups of the state file and follow proper
version control practices to recover from such situations.

You can enable versioning on the S3 bucket using the AWS Management Console, AWS CLI, or SDKs, ensuring that different versions of the state file are retained.
Apart from S3, Terraform supports backends like Consul and Terraform Cloud for remote state management.

## Terraform Backends

The Terraform backend in AWS is used to store and manage the state file remotely, ensuring collaboration and consistency among team members
working on the same infrastructure.

S3 provides durable and scalable object storage, making it an ideal choice for storing the Terraform state. It also allows versioning and access
control, ensuring data integrity and security.

You can configure an S3 backend in Terraform by specifying the backend configuration block in the root module with details like bucket name and key.

## Virtual Private Cloud(VPC)

A VPC is a virtual network within AWS that allows you to isolate and control the networking environment for your resources. It provides enhanced security, routing control, and segmentation of resources in the cloud.
To create a VPC in Terraform, you use the "aws_vpc" resource block, specifying the desired CIDR block and other optional configurations like subnets and route tables.
You have overlapping IP ranges between different VPCs in AWS.However, it's important to avoid such conflicts as they can lead to connectivity issues.

`enable_dns_hostnames`:- You can enable DNS hostname resolution in Terraform by setting the attribute to true.

**aws_flow_log**:- Enable VPC flow logs, specifying the VPC ID, traffic type, and the destination where logs should be sent (e.g., CloudWatch Logs).

**VPC peering**:-VPC peering allows direct communication between two VPCs. In Terraform, you use the "aws_vpc_peering_connection" resource block to create peering connections and establish communication between VPCs.
VPC peering does not support transitive relationships. If VPC A is peered with VPC B and VPC B is peered with VPC C, VPC A and VPC C do not have direct communication.

To connect VPCs from different accounts, you can use AWS PrivateLink or AWS Transit Gateway, which allows you to centralize connectivity between multiple VPCs.

Some aspects of a VPC, like CIDR block and tenancy, cannot be modified after creation. However, other attributes, such as subnets and route tables, can be modified in Terraform by updating the configuration.

## NAT Gateway

A NAT Gateway allows private subnets to access the internet while preventing direct incoming traffic. In Terraform, you use the "aws_nat_gateway" resource block to create a NAT Gateway and associate it with a public subnet.

## Internet Gateway(IGW)

The Internet Gateway enables communication between instances in a VPC and the internet. It allows resources within the VPC to access the internet and be accessed by resources outside the VPC.
Defined in aws_internet_gateway.

`aws_vpc_attachment` - associate an Internet Gateway with a VPC.

## Network Access Control List (NACL)

NACL is a stateless firewall that controls inbound and outbound traffic at the subnet level. Unlike Security Groups, NACLs operate at the subnet level and require explicit rules for both inbound and outbound traffic.
You use the "aws_network_acl".

**aws_network_acl_rule** - create and define rules for a Network Access Control List associated with a VPC subnet.

## VPN (Virtual Private Network) Gateway

A VPN Gateway is a virtual private network connection used to establish secure connections between on-premises networks and VPCs, allowing for secure communication.
To create a VPN Gateway in Terraform, you use the "aws_vpn_gateway" resource block and associate it with the VPC using the "aws_vpn_gateway_attachment" resource block.

## Subnet

A subnet is a segmented portion of an IP network within a VPC. Each subnet must be associated with a VPC, and instances launched within a subnet are assigned IP addresses from the subnet's CIDR range.
You can create subnets in Terraform using the "aws_subnet" resource block, specifying the VPC ID, CIDR block, and availability zone.
A public subnet is associated with a route table that has an Internet Gateway route, allowing instances to communicate with the internet. A private subnet does not have such a route, making instances in it inaccessible from the internet directly.

## EC2

You define an EC2 instance resource using the "aws_instance" resource block in Terraform.

`AMI ID` - You can specify the AMI ID using the "ami" parameter within the "aws_instance" resource block.
`instance_type`:- The "instance_type" parameter determines the hardware configuration (e.g., CPU, memory) of the EC2 instance.
`user_data`:- The "user_data" parameter allows you to provide a script or configuration that runs when the instance boots.
`key_name`:- The "key_name" parameter specifies the name of the EC2 key pair to use for SSH access to the instance.
`associate_public_ip_address`:- Assigns an Elastic IP (EIP) to the EC2 instance.Set it to "true" along with "eip" resource.
`vpc_security_group_ids`:- Associates an existing security group with an EC2 instance.
`iam_instance_profile`:- configures the EC2 instance to use an IAM instance profile.Associates the instance with the desired IAM role.
`block_device`:- defines block device mappings (e.g., EBS volumes) for an EC2 instance.
`vpc_security_group_ids` & `subnet_id`:- configures the EC2 instance to join an existing VPC and subnet.
`count`:- allows you to create multiple instances using the same resource block with different settings.
`spot_price`:- provision spot instances instead of on- demand instances.
`monitoring`:- enables detailed monitoring (CloudWatch) for an EC2 instance in Terraform.
`availability_zone`:- deploy EC2 instances across multiple AWS availability zones.

## S3 Bucket

An S3 bucket is defined using the `aws_s3_bucket` resource block in Terraform, specifying the required parameters like bucket name and region.
You can apply an IAM policy to the S3 bucket, allowing access only to specific IAM users or roles.
Object lifecycle management defines actions to be taken on objects in an S3 bucket at certain stages of their lifecycle. For example, you can transition objects to Glacier storage after a certain period.

`versioning`:- Versioning in an S3 bucket keeps multiple versions of an object. You
can enable versioning by setting it to true.
`server_side_encryption_configuration`:- Data at rest can be encrypted in an S3 bucket by setting the desired encryption type.
`lifecycle_rule`:- configures Object lifecycle management.

## AWS RDS(Amazon Relational Database Service)

An AWS RDS instance is defined using the "aws_db_instance" resource block in Terraform. You specify the required parameters like instance class, engine, username, and password.

`multi_az`:- enables multi-AZ.
`backup_retention_period`:- specifies the number of days to retain automatic backups of the RDS instance.
`name`:- specify the initial database name to create.

You can modify the "allocated_storage" attribute in the "aws_db_instance" resource block and apply the changes.

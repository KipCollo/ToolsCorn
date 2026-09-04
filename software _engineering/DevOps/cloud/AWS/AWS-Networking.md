# AWS Networking

Networking is a fundamental component of any IT infrastructure, whether on-premises on in the cloud.
AWS Networking services includes:-

1. VPC
2. CloudFront
3. API Gateway
4. Direct Connect
5. AWS App Mesh
6. Global Accelerator
7. AWS Cloud Map
8. Amazon Application
9. Recovery Controller
10. AWS Private SG
11. Route 53
12. AWS Data Transfer Terminal.


## AWS Virtual Private Cloud (VPC)

The `Amazon Virtual Private Cloud (VPC)` service provides the network backbone for many AWS services. A virtual private cloud is a virtual network in the AWS cloud that’s logically isolated from other networks. The most well-­known use of VPCs is connecting EC2 instances together and to other AWS services and networks, including the Internet.
A VPC is a virtual network in the cloud. You choose the Region in which to create your VPC and define its network parameters such as the IP address range and any subnetworks within it, for resource isolation.
Resources deployed in your VPC can then access services on the internet or can grant inbound access from the internet, for example, if you are hosting an e-commerce web server.


- A service that lets users to launch AWS resources in a logically isolated virtual network that they define.Users have complete control over their virtual networking environment, including:-
   1. A selection of user’s own IP address range (possible to use both IPv4 and IPv6 for most resources)
   2. Creation of subnets
   3. Configuration of route tables and network gateways

It makes it easy for users to customize their VPC's network configuration.Allows users to place their backend systems in a private-facing subnet with no internet access
Users can create a public-facing subnet for their web servers that have access to the internet such as databases or application servers
Allows users to use multiple layers of security to help control access to Amazon Elastic Compute Cloud (Amazon EC2) instances in each subnet -Including security groups and network access control lists

With Amazon Virtual Private Cloud (Amazon VPC), you can launch AWS resources in a logically isolated virtual network that you've defined. This virtual network closely resembles a traditional network that you'd operate in your own data center, with the benefits of using the scalable infrastructure of AWS.

- *Features*:- The following features help you configure a VPC to provide the connectivity that your applications need:
   - `Virtual private clouds (VPC)`:- A VPC is a virtual network that closely resembles a traditional network that you'd operate in your own data center.It is logically isolated from other virtual networks in the AWS Cloud. You can specify an IP address range for the VPC, add subnets, add gateways, and associate security groups
   - `Subnets`:- A subnet is a range of IP addresses in your VPC. A subnet must reside in a single Availability Zone. After you add subnets, you can deploy AWS resources in your VPC.You can connect a subnet to the internet, other VPCs, and your own data centers, and route traffic to and from your subnets using route tables.
   - `IP addressing`:- You can assign IP addresses, both IPv4 and IPv6, to your VPCs and subnets. You can also bring your public IPv4 addresses and IPv6 GUA addresses to AWS and allocate them to resources in your VPC, such as EC2 instances, NAT gateways, and Network Load Balancers.
   - `Routing`:- Use route tables to determine where network traffic from your subnet or gateway is directed.
   - `Gateways and endpoints`:- A gateway connects your VPC to another network. For example, use an internet gateway to connect your VPC to the internet. Use a VPC endpoint to connect to AWS services privately, without the use of an internet gateway or NAT device.
   - `Peering connections`:- Use a VPC peering connection to route traffic between the resources in two VPCs.
   - `Traffic Mirroring`:- Copy network traffic from network interfaces and send it to security and monitoring appliances for deep packet inspection.
   - `Transit gateways`:- Use a transit gateway, which acts as a central hub, to route traffic between your VPCs, VPN connections, and AWS Direct Connect connections.
   - `VPC Flow Logs`:- A flow log captures information about the IP traffic going to and from network interfaces in your VPC.
   - `VPN connections`:-  Connect your VPCs to your on-premises networks using AWS Virtual Private Network (AWS VPN).

Your AWS account includes a default VPC in each AWS Region. Your default VPCs are configured such that you can immediately start launching and connecting to EC2 instances.You can choose to create additional VPCs with the subnets, IP addresses, gateways and routing that you need.

When you create an AWS account, Amazon automatically creates a default VPC in each region. The default VPC is configured to allow instances within the VPC to access the Internet. This way you don’t have to create and configure your own VPC just to use EC2.You can create your own nondefault VPCs. Nondefault VPCs are fully isolated from every other network and AWS resource, including other VPCs. This means you’ll have to configure them explicitly if you want them to have access to other networks and AWS resources outside of the VPC.

AWS already provides you with a default VPC in each Region. These default VPCs are designed to get you up and running with the ability to deploy EC2 instances so that they can access the internet and, where necessary, be configured to allow direct inbound access from the internet.
You can also configure custom VPCs to suit your business requirements. When configuring a new VPC, you need to define an IP address block from one of the private
IP ranges. Your VPC spans the entire Region in which you deploy it. This means that you can place workloads in different Availability Zones within the VPC to design for
high availability.

*Working with Amazon VPC*:- You can create and manage your VPCs using any of the following interfaces:

1. AWS Management Console — Provides a web interface that you can use to access your VPCs.
2. AWS Command Line Interface (AWS CLI) — Provides commands for a broad set of AWS services, including Amazon VPC, and is supported on Windows, Mac, and Linux.
3. AWS SDKs — Provides language-specific APIs and takes care of many of the connection details, such as calculating signatures, handling request retries, and error handling.
4. Query API — Provides low-level API actions that you call using HTTPS requests. Using the Query API is the most direct way to access Amazon VPC, but it requires that your application handle low-level details such as generating the hash to sign the request, and error handling.

*Pricing for Amazon VPC*:- There's no additional charge for using a VPC. There are, however, charges for some VPC components, such as NAT gateways, IP Address Manager, traffic mirroring, Reachability Analyzer, and Network Access Analyzer.

Nearly all resources that you launch in your virtual private cloud (VPC) provide you with an IP address for connectivity. The vast majority of resources in your VPC use private IPv4 addresses. Resources that require direct access to the internet over IPv4, however, use public IPv4 addresses.

Amazon VPC enables you to launch managed services, such as Elastic Load Balancing, Amazon RDS, and Amazon EMR, without having a VPC set up beforehand. It does this by using the default VPC in your account if you have one. Any public IPv4 addresses provisioned to your account by the managed service will be charged. These charges will be associated with Amazon VPC service in your AWS Cost and Usage Report.

- Pricing for public IPv4 addresses

A public IPv4 address is an IPv4 address that is routable from the internet. A public IPv4 address is necessary for a resource to be directly reachable from the internet over IPv4.

If you are an existing or new AWS Free Tier, you get 750 hours of public IPv4 address usage with the EC2 service at no charge. If you are not using the EC2 service in the AWS Free Tier, Public IPv4 addresses are charged.

Private IPv4 addresses (RFC 1918) are not charged.

Public IPv4 addresses have the following types:

1. Elastic IP addresses (EIPs): Static, public IPv4 addresses provided by Amazon that you can associate with an EC2 instance, elastic network interface, or AWS resource.
2. EC2 public IPv4 addresses: Public IPv4 addresses assigned to an EC2 instance by Amazon (if the EC2 instance is launched into a default subnet or if the instance is launched into a subnet that’s been configured to automatically assign a public IPv4 address).
3. BYOIPv4 addresses: Public IPv4 addresses in the IPv4 address range that you’ve brought to AWS using Bring your own IP addresses (BYOIP).
4. Service-managed IPv4 addresses: Public IPv4 addresses automatically provisioned on AWS resources and managed by an AWS service. For example, public IPv4 addresses on Amazon ECS, Amazon RDS, or Amazon WorkSpaces.

The following list shows the most common AWS services that can use public IPv4 addresses.

- Amazon AppStream 2.0
- AWS Client VPN
- AWS Database Migration Service
- Amazon EC2
- Amazon Elastic Container Service
- Amazon EKS
- Amazon EMR
- Amazon GameLift
- AWS Global Accelerator
- AWS Mainframe Modernization
- Amazon Managed Streaming for Apache Kafka
- Amazon MQ
- Amazon RDS
- Amazon Redshift
- AWS Site-to-Site VPN
- Amazon VPC NAT gateway
- Amazon WorkSpaces
- Elastic Load Balancing


A virtual private cloud (VPC) is a virtual network dedicated to your AWS account. It is logically isolated from other virtual networks in the AWS Cloud. You can specify an IP address range for the VPC, add subnets, add gateways, and associate security groups.
A subnet is a range of IP addresses in your VPC. You launch AWS resources, such as Amazon EC2 instances, into your subnets. You can connect a subnet to the internet, other VPCs, and your own data centers, and route traﬃc to and from your subnets using route tables.

**Default and nondefault VPCs**:- 

*Default VPC* - If your account was created after December 4, 2013, it comes with a default VPC in each Region. A default VPC is configured and ready for you to use. For example, it has a default subnet in each Availability Zone in the Region, an attached internet gateway, a route in the main route table that sends all traffic to the internet gateway, and DNS settings that automatically assign public DNS hostnames to instances with public IP addresses and enable DNS resolution through the Amazon-provided DNS server (see DNS attributes in your VPC). Therefore, an EC2 instance that is launched in a default subnet automatically has access to the internet. If you have a default VPC in a Region and you don't specify a subnet when you launch an EC2 instance into that Region, we choose one of the default subnets and launch the instance into that subnet.

A default VPC comes with a public subnet in each Availability Zone, an internet gateway, and settings to enable DNS resolution. Therefore, you can immediately start launching Amazon EC2 instances into a default VPC.
When we create a default VPC, we do the following to set it up for you:
1. Create a VPC with a size /16 IPv4 CIDR block (172.31.0.0/16). This provides up to 65,536 private IPv4 addresses.
2. Create a size /20 default subnet in each Availability Zone. This provides up to 4,096 addresses per subnet, a few of which are reserved for our use.
3. Create an internet gateway and connect it to your default VPC.
4. Add a route to the main route table that points all traﬃc (0.0.0.0/0) to the internet gateway.
5. Create a default security group and associate it with your default VPC.
6. Create a default network access control list (ACL) and associate it with your default VPC.
7. Associate the default DHCP options set for your AWS account with your default VPC.


*Non-Default* - You can also create your own VPC, and configure it as you need. This is known as a nondefault VPC. Subnets that you create in your nondefault VPC and additional subnets that you create in your default VPC are called nondefault subnets.


**Route tables**:- A route table contains a set of rules, called routes, that are used to determine where network traffic from your VPC is directed. You can explicitly associate a subnet with a particular route table. Otherwise, the subnet is implicitly associated with the main route table.

Each route in a route table specifies the range of IP addresses where you want the traffic to go (the destination) and the gateway, network interface, or connection through which to send the traffic (the target).

**Connect VPCs and networks**:- You can create a VPC peering connection between two VPCs that enables you to route traffic between them privately. Instances in either VPC can communicate with each other as if they are within the same network.

You can also create a *transit gateway* and use it to interconnect your VPCs and on-premises networks. The transit gateway acts as a Regional virtual router for traffic flowing between its attachments, which can include VPCs, VPN connections, AWS Direct Connect gateways, and transit gateway peering connections.

**Access a corporate or home network**:-You can optionally connect your VPC to your own corporate data center using an IPsec AWS Site-to-Site VPN connection, making the AWS Cloud an extension of your data center.

A Site-to-Site VPN connection consists of two VPN tunnels between a virtual private gateway or transit gateway on the AWS side, and a customer gateway device located in your data center. A customer gateway device is a physical device or software appliance that you configure on your side of the Site-to-Site VPN connection.

**Access the internet**:- You control how the instances that you launch into a VPC access resources outside the VPC.

A default VPC includes an internet gateway, and each default subnet is a public subnet. Each instance that you launch into a default subnet has a private IPv4 address and a public IPv4 address. These instances can communicate with the internet through the internet gateway. An internet gateway enables your instances to connect to the internet through the Amazon EC2 network edge.

By default, each instance that you launch into a nondefault subnet has a private IPv4 address, but no public IPv4 address, unless you specifically assign one at launch, or you modify the subnet's public IP address attribute. These instances can communicate with each other, but can't access the internet.

You can enable internet access for an instance launched into a nondefault subnet by attaching an internet gateway to its VPC (if its VPC is not a default VPC) and associating an Elastic IP address with the instance.

Alternatively, to allow an instance in your VPC to initiate outbound connections to the internet but prevent unsolicited inbound connections from the internet, you can use a network address translation (NAT) device. NAT maps multiple private IPv4 addresses to a single public IPv4 address. You can configure the NAT device with an Elastic IP address and connect it to the internet through an internet gateway. This makes it possible for an instance in a private subnet to connect to the internet through the NAT device, routing traffic from the instance to the internet gateway and any responses to the instance.

If you associate an IPv6 CIDR block with your VPC and assign IPv6 addresses to your instances, instances can connect to the internet over IPv6 through an internet gateway. Alternatively, instances can initiate outbound connections to the internet over IPv6 using an egress-only internet gateway. IPv6 traffic is separate from IPv4 traffic; your route tables must include separate routes for IPv6 traffic.


A VPC spans all of the Availability Zones in a Region. After you create a VPC, you can add one or more subnets in each Availability Zone.
When you create a VPC, you specify its IP addresses as follows:
1. IPv4 only – The VPC has an IPv4 CIDR block but does not have an IPv6 CIDR block.
2. Dual stack – The VPC has both an IPv4 CIDR block and an IPv6 CIDR block.


**VPC Resources**

Each VPC automatically comes with the following resources:- Default DHCP option set, Default network ACL, Default security group, Main route table.
You can create the following resources for your VPC:- Network ACLs, Custom route tables, Security groups, Internet gateway, NAT gateways.


**VPC conﬁguration options** - You can specify the following conﬁguration options when you create a VPC.

`Availability Zones` - Discrete data centers with redundant power, networking, and connectivity in an AWS Region.You can use multiple AZs to operate production applications and databases that are more highly available, fault tolerant, and scalable than would be possible from a single data center. If you partition your applications running in subnets across AZs, you are better isolated and protected from issues such as power outages, lightning strikes, tornadoes, and earthquakes.
`CIDR blocks` - You must specify IP address ranges for your VPC and subnets.
`Internet gateway` - Connects your VPC to the internet. The instances in a public subnet can access the internet because the subnet route table contains a route that sends traﬃc bound for the internet to the internet gateway. If a server doesn't need to be directly reachable from the internet, you should not deploy it into a public subnet.
`DNS options` - If you need public IPv4 DNS hostnames for the EC2 instances launched into your subnets, you must enable both of the DNS options.
- Enable DNS hostnames: EC2 instances launched in the VPC receive public DNS hostnames that correspond to their public IPv4 addresses.
- Enable DNS resolution: DNS resolution for private DNS hostnames is provided for the VPC by the Amazon DNS server, called the Route 53 Resolver.
`Name` - The names that you specify for the VPC and the other VPC resources are used to create Name tags. If you use the name tag auto-generation feature in the console, the tag values have the format name-resource.
`NAT gateways` - Enables instances in a private subnet to send outbound traﬃc to the internet, but prevents resources on the internet from connecting to the instances. In production, we recommend that you deploy a NAT gateway in each active AZ.
`Route tables` - Contains a set of rules, called routes, that determine where network traﬃc from your subnet or gateway is directed.


**Build Your VPC and Launch a Web Server** - 

Scenario

In this lab, you use Amazon Virtual Private Cloud (VPC) to create your own VPC and add additional components to produce a customized network for a Fortune 100 customer. You also create security groups for your EC2 instance. You then configure and customize an EC2 instance to run a web server and launch it into the VPC that looks like the following customer diagram:

Create your VPC:-

In this task, you use the VPC Wizard to create a VPC, an internet gateway, and two subnets in a single Availability Zone. An internet gateway is a VPC component that allows communication between instances in your VPC and the internet.

After creating a VPC, you can add subnets. Each subnet resides entirely within one Availability Zone and cannot span zones. If a subnet's traffic is routed to an internet gateway, the subnet is known as a public subnet. If a subnet does not have a route to the internet gateway, the subnet is known as a private subnet.

The wizard also creates a NAT gateway, which is used to provide internet connectivity to EC2 instances in private subnets.

1. At the upper-right of these instructions, choose AWS. The AWS Management Console opens in a new tab.
2. Once you are in the AWS console, type and search for VPC in the search bar at the top. Select VPC from the list.
3. You are now in the Amazon VPC dashboard. You use the Amazon Virtual Private Cloud (Amazon VPC) service to build your VPC.
4. Choose Create VPC and configure the following options:
   - Resources to create: Choose VPC and more
   - Name tag auto-generation: UnCheck the box Auto-generate
   - IPv4 CIDR: Enter 10.0.0.0/16
   - IPv6 CIDR block: Choose No IPv6 CIDR block.
   - Tenancy: Choose Default.
   - Number of Availability Zones (AZs) :  1
   - Number of public subnets:  1
   - Number of private subnets:  1
   - Expand Customize subnets CIDR blocks
         1. Public subnet CIDR block in us-west-2a: 10.0.0.0/24
         2. Private subnet CIDR block in us-west-2a: 10.0.1.0/24
   - NAT gateways: Choose In 1 AZ
   - VPC endpoints: Choose None

5. On the Preview pane, name the resources as follows:
   - VPC: Lab VPC
   - Subnets (2)
         1. First box, Public subnet one without name tag: Public Subnet 1
         2. Second box, Private subnet one without name tag: Private Subnet 1
   - Route tables (2)
         1. First box, Public route table without name tag: Public Route Table
         2. Second box, Private route table without name tag: Private Route Table
6. Choose Create VPC.
7. On the next screen, Success message is displayed with VPC details.
8. Choose View VPC.
Lab VPC details are displayed as per configuration.

*Create additional subnets* - 

In this task, you create two additional subnets in a second Availability Zone. This option is useful for creating resources in multiple Availability Zones to provide high availability.

1. In the left navigation pane, choose Subnets.
2. To configure the second public subnet, choose Create subnet and configure the following options:
   - VPC ID: From the dropdown list, choose Lab VPC.
   - Subnet name: Enter Public Subnet 2
   - Availability Zone: No preference
   - IPv4 CIDR block: Enter 10.0.2.0/24
3. Choose Create subnet.
 The subnet will have all IP addresses starting with 10.0.2.x.
4. To configure the second private subnet, choose Create subnet and configure the following options:
   - VPC ID: From the dropdown list, choose Lab VPC.
   - Subnet name: Enter Private Subnet 2
   - Availability Zone: No preference
   - IPv4 CIDR block: Enter 10.0.3.0/24
5. Choose Create subnet.
 The subnet will have all IP addresses starting with 10.0.3.x.

*Associate the subnets and add routes* - 

1. In the left navigation pane, choose Route Tables.
2. Choose Public Route Table
3. In the lower pane, choose the Subnet associations tab.
4. Under Subnets without explicit associations, choose Edit subnet associations.
5. Select the check boxes for Public Subnet 2.
6. Choose Save associations.
You now configure the route table that is used by the private subnets.
7. Choose Private Route Table
8. In the lower pane, choose the Subnet associations tab.
9. Under Subnets without explicit associations, choose Edit subnet associations.
10. Select the check boxes for Private Subnet 2.
11. Choose Save associations.
 Your VPC now has public and private subnets configured in two Availability Zones:

*Create a VPC security group* - 

In this task, you create a VPC security group, which acts as a virtual firewall for your instance. When you launch an instance, you associate one or more security groups with the instance. You can add rules to each security group that allow traffic to or from its associated instances.

1. In the left navigation pane, choose Security Groups.
2. Choose Create security group.
3. Configure the security group with the following options:
   - Security group name: Enter Web Security Group
   - Description: Enter Enable HTTP access
   - VPC: Choose Lab VPC.
4. Under Inbound rules, choose Add rule.
5. Configure the following options:
   - Type: Choose HTTP.
   - Source: Choose Anywhere IPv4.
   - Description: Enter Permit web requests
6. Choose Create security group.

You use this security group in the next task when launching an EC2 instance.

*Launch a web server instance* - 

In this task, you launch an EC2 instance into the new VPC. You configure the instance to act as a web server.

1. On the AWS Management Console, in the Search bar, enter and choose EC2 to go to the EC2 Management Console.
2. In the left navigation pane, choose Instances.
3. Choose Launch instances and configure the following options:

   - In the Name and tags section, Name:  Web Server 1.
   - In the Application and OS Images (Amazon Machine Image) section, configure the following options:
      1. Quick Start: Choose Amazon Linux.
      2. Amazon Machine Image (AMI): From dropdown, Choose Amazon Linux 2 AMI (HVM).
   - In the Instance type section, choose t3.micro.
   - In the Key pair (login) section, choose vockey.
4. In the Network settings section, choose Edit and configure the following options:
   - VPC - required: Choose Lab VPC.
   - Subnet: Choose Public Subnet 2.
   - Auto-assign public IP: Choose Enable.
   - Firewall (security groups): Choose Select existing security group.
        Choose Web Security Group.

5. Expand Advanced details
6. Under User data, copy and paste the following code
7. Choose Launch instance.
8. To display the launched instance, choose View all instances.
9. Wait until the Web Server 1 shows 2/2 checks passed in the Status check column.
10. This may take a few minutes. To update the page, choose refresh  at the top of the page.
You now connect to the web server running on the EC2 instance.
11. Select the check box for the instance, and choose the Details tab.
12. Copy the Public IPv4 DNS value.
13. Open a new web browser tab, paste the Public IPv4 DNS value, and press Enter.

```bash
#!/bin/bash
#Install Apache Web Server and PHP
yum install -y httpd mysql php

#Download Lab files
wget https://aws-tc-largeobjects.s3.us-west-2.amazonaws.com/CUR-TF-100-RESTRT-1/267-lab-NF-build-vpc-web-server/s3/lab-app.zip
unzip lab-app.zip -d /var/www/html/

#Turn on web server
chkconfig httpd on
service httpd start
```



**VPC CIDR Blocks** - Each VPC requires a Classless Inter-­Domain Routing (CIDR) block to define the range of IP version 4 (IPv4) addresses that resources within the VPC can use. Default VPCs have a CIDR of 172.31.0.0/16, which includes all addresses from 172.31.0.0 to 172.31.255.255. The /16 refers to the size of the CIDR. You must choose a CIDR size between /16 and /28, but otherwise, any CIDR you could assign to a traditional network can also be assigned to a VPC. The smaller the CIDR size, the greater the number of IP addresses available to the VPC. The following are a few examples of CIDR blocks that you could assign to a VPC:


**Create a VPC using the AWS CLI** - The following procedure contains example AWS CLI commands to create a VPC plus the additional VPC resources needed to run an application.
*Tagging* - You can add tags to a resource after you create it by using the create-tags command. Alternatively,you can add the --tag-specification option to the creation command for the resource as follows.

```sh
--tag-specifications ResourceType=vpc,Tags=[{Key=Name,Value=my-project}]
```

You use the aws ec2 command prefix to create a VPC because Amazon VPC was originally released as a feature tightly integrated into the Amazon Elastic Compute Cloud (EC2) subsystem, and AWS maintains this command structure to ensure backward compatibility for its API.
Create an internet gateway by using the following create-internet-gateway command. The command returns the ID of the new internet gateway.

```sh
aws ec2 create-internet-gateway --query InternetGateway.InternetGatewayId -- output text
```


*To check your existing VPCs, use the aws ec2 describe-vpcs command.*
The default command outputs a massive JSON payload. You can use the --query parameter to clean up the output and display only the most important details (like VPC ID, CIDR block, and State) in a clean table format:

```sh
aws ec2 describe-vpcs --query "Vpcs[*].{ID:VpcId,CIDR:CidrBlock,State:State,Default:IsDefault}" --output table
```

To view your VPC along with all of its connected subnets, internet gateways, route tables, and security groups, you will need to run a series of describe commands.Because the AWS CLI returns isolated data for each resource type, you can use the --filters flag to isolate only the components belonging to your specific VPC.

1. List Subnets - To see all subnets inside your specific VPC, filter by the vpc-id:

```sh
aws ec2 describe-subnets --filters "Name=vpc-id,Values=vpc-your_vpc_id_here" --query "Subnets[*].{ID:SubnetId,CIDR:CidrBlock,AZ:AvailabilityZone,Name:Tags[?Key=='Name'].Value | [0]}" --output table
```

2. List Internet Gateways - Internet gateways are detached resources that get logically "attached" to a VPC. To find the gateway hooked up to your VPC:

```bash
aws ec2 describe-internet-gateways --filters "Name=attachment.vpc-id,Values=vpc-your_vpc_id_here" --query "InternetGateways[*].{ID:InternetGatewayId,State:Attachments[0].State}" --output table
```

3. List Route Tables - To see how traffic moves between your subnets and gateways within that VPC:

```bash
aws ec2 describe-route-tables --filters "Name=vpc-id,Values=vpc-your_vpc_id_here" --query "RouteTables[*].{ID:RouteTableId,Main:Associations[?Main==`true`].Main | [0]}" --output table
```

4. List Security Groups - To view the built-in firewalls safeguarding resources inside that VPC:

```bash
aws ec2 describe-security-groups --filters "Name=vpc-id,Values=vpc-your_vpc_id_here" --query "SecurityGroups[*].{ID:GroupId,Name:GroupName,Description:Description}" --output table
```


## Subnets for your VPC

A subnet is a range of IP addresses in your VPC. You can create AWS resources, such as EC2 instances, in speciﬁc subnets.

Each subnet must reside entirely within one Availability Zone and cannot span zones. By launching AWS resources in separate Availability Zones, you can protect your applications from the failure of a single Availability Zone.


## Connect your VPC to other networks

You can connect your virtual private cloud (VPC) to other networks, such as other VPCs, the internet, or your on-premises network.

AWS provides a range of tools and features to enable these VPC connections, including internet gateways, NAT gateways, VPC peering, transit gateways, and AWS Direct Connect. By leveraging these capabilities, organizations can create secure and integrated cloud environments that seamlessly integrate with their existing IT infrastructure.

*Enable VPC internet access using internet gateways* - An internet gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet. It supports IPv4 and IPv6 traﬃc. It does not cause availability risks or bandwidth constraints on your network traﬃc.
An internet gateway enables resources in your public subnets (such as EC2 instances) to connect to the internet if the resource has a public IPv4 address or an IPv6 address. Similarly, resources on the internet can initiate a connection to resources in your subnet using the public IPv4 address or IPv6 address. For example, an internet gateway enables you to connect to an EC2 instance in AWS using your local computer.

An internet gateway provides a target in your VPC route tables for internet-routable traﬃc. For communication using IPv4, the internet gateway also performs network address translation (NAT).

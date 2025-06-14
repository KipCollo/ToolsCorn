# Terraform

Terraform is an infrastructure automation tool developed by HashiCorp and it is written in the Go programming language. It is the first multi-cloud infrastructure tool that allows the user to automate and set up infrastructure elements from several cloud vendors simultaneously, as well as custom in-house solutions.

Terraform is a powerful open source IaC tool that lets you define your infrastructure in human-readable configuration files. Instead of manually clicking through clunky web interfaces, you write code that describes the infrastructure you need. This code essentially becomes a blueprint for your infrastructure, allowing you to:

1. Provision and manage infrastructure across multiple cloud providers like AWS, Azure, GCP, and even on-premises data centers.
2. Automate infrastructure changes in a safe and reliable way. No more manual errors or configuration drift!
3. Version control your infrastructure like any other code, making collaboration and rollbacks a breeze.
4. Re-use infrastructure components as modular "Terraform modules," promoting consistency and efficiency.

By leveraging the power of Terraform, you can:

- Ship your code faster - No more waiting for IT teams to provision infrastructure. Terraform automates the process, allowing you to deploy your code quickly and efficiently.
- Focus on what matters - By eliminating manual infrastructure tasks, you free up valuable time and mental energy to focus on what you do best – write amazing code!
- Collaborate better - Terraform's human-readable configuration files make it easy for developers and other teams to collaborate on infrastructure management.
- Achieve consistency - With Terraform, your infrastructure is defined as code, ensuring consistency and repeatability across different environments.
- Embrace reusability - Terraform modules allow you to build reusable infrastructure components, saving you time and effort in the long run.

Real-world examples of using Terraform:

1. A startup wants to launch a new web application with a database and load balancer. Using Terraform, they can define the entire infrastructure in a single configuration file, provision it automatically, and easily scale it up as needed.
2. A large organization needs to manage a complex infrastructure across multiple cloud providers. Terraform can help them manage all their infrastructure from a single platform, ensuring consistency and compliance.
3. A team of developers wants to deploy a new microservice architecture. They can use Terraform to define the infrastructure for each microservice as a Terraform module, simplifying deployment and management.

Terraform describes the infrastructure through the configuration files which are written in its own developed domain-specific language called Hashicorp Configuration Language (HCL). These files are compatible to JSON and are used to deploy the requested resources. These files can be easily shared and reused to create the same environment elsewhere.

Terraform also provides execution plans, which describe the procedure that is followed in order to reach the desired state of the infrastructure. The execution plan first gives an overview of that happens by the time it is called and then Terraform actually sets up the infrastructure by executing this plan. In addition, Terraform is able to create a graph of the infrastructure resources by parallelizing the creation and modification of any non-dependent resource. The use of the execution plan combined with the produced resource graph provides more automation towards changes with less human involvement, as the user has more insight on the Terraform’s functionality, avoiding possible human errors.

Terraform stores the state of the managed infrastructure in a local file called terraform.tfstate. This file can also be stored remotely which is useful when working in a
remotely distributed team. This local state is used to create the execution plans and make the necessary infrastructure changes. After each performed operation, Terraform
refreshes the state in order to match the actual real time infrastructure.

## Projects

- Provision EC2 based HTTP Servers with Load Balancer
- Provision AWS and Azure Kubernetes Clusters (Azure DevOps Pipelines)

## Steps

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
- Step 25 - Installing Http Server on EC2 with Terraform - Part 2
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

## Commands Executed

```bash
brew install terraform
terraform --version
terraform version
terraform init
export AWS_ACCESS_KEY_ID=*******
export AWS_SECRET_ACCESS_KEY=*********
terraform plan
terraform console
terraform apply -refresh=false
terraform plan -out iam.tfplan
terraform apply "iam.tfplan"
terraform apply -target="aws_iam_user.my_iam_user"
terraform destroy
terraform validate
terraform fmt
terraform show
export TF_VAR_iam_user_name_prefix = FROM_ENV_VARIABLE_IAM_PREFIX
export TF_VAR_iam_user_name_prefix=FROM_ENV_VARIABLE_IAM_PREFIX
terraform plan -refresh=false -var="iam_user_name_prefix=VALUE_FROM_COMMAND_LINE"
terraform apply -target=aws_default_vpc.default
terraform apply -target=data.aws_subnet_ids.default_subnets
terraform apply -target=data.aws_ami_ids.aws_linux_2_latest_ids
terraform apply -target=data.aws_ami.aws_linux_2_latest
terraform workspace show
terraform workspace new prod-env
terraform workspace select default
terraform workspace list
terraform workspace select prod-env
```

## Infrastructure Design

Terraform provisions the resources of a dynamic platform, and a Terraform provider is used to interact with the APIs and expose the resources from the corresponding dynamic platform. Terraform allows its users to declare resources from different providers in the same or in different HCL files.

Openstack and Cobbler providers are used for provisioning VMs and the bare metal machines, respectively. Openstack should be installed on the entire data center of the organization, while Terraform and Cobbler should be installed on the central control nodes for building the infrastructure.

`Creating Virtual Machines` Terraform creates VMs in Openstack by combining several resources from the Openstack provider. The user has a wide variety of options for the configuration of an VM instance in Openstack. Amongst others, the user is able to select:

1. VM Name: Unique name that characterizes the VM instance.
2. Image: Installed OS on the VM. The user can create several different images using a separate Terraform resource. The names of these images are later used during the creation of the VMs. The configuration of an image includes:
   1. Name of the image
   2. OS URL: Url address of the preferred OS that Openstack downloads and uses.
   3. Image Format: E.g., iso, qcow2, vhd, etc.
   4. Hypervisor: Type of hypervisor that is used to create the VM. (e.g.,qemu, vmware, xen, lxc)
   5. CPU Architecture of the VM : E.g., x86_64, arm, ppc65
3. Flavor: Capabilities of the VM. The user can create several flavors and based on the configuration of the flavor, the user can define several types of nodes for
the system (e.g., central server nodes, console nodes, diskless nodes etc.). The configuration of a flavor includes:
   1. Name of the flavor
   2. RAM: Size of the available RAM on the VM
   3. CPU: Number of virtual cores on the VM
   4. Disk Size: Capacity of the VM
   5. GPU: Number of virtual GPUs on the VM
   6. I/O: Number of physical I/O that the VM can use.
4. Network: Network where the VM is assigned to.
5. Security Group: Group of network access rules that control the traffic types that interact with an instance.
6. Availability Zone: Groups of compute hosts that are responsible for launching the VM instances.
7. Authentication Key Pair: Public keys that are used to access a created VM.

`Provisioning Bare Metal Machines` Terraform uses the Cobbler provider to provision bare metal machines. Cobbler performs provisioning by using the PXE standard to boot the machines over the network.
PXE works with the Network Interface Card (NIC) of the machine by transforming it to a boot device. The NIC of the client broadcasts a request to the DHCP server, which
responds with the IP address of the client, the address of the TFTP server and the location of the boot files on the TFTP server. After receiving these data, the client
connects with the TFTP server in order to receive the boot image. The TFTP server responds by sending the boot image and the client executes it. The boot image searches by default the PXE configuration directory on the TFTP server, seeking the boot configuration files. After finding the required files, the client downloads them and
loads them in order to start the installation. The DHCP and the TFTP services are both managed by Cobbler, which is based on a specific set of objects for the provisioning process. The basic Cobbler objects are:

1. Distribution: It basically describes the OS. It includes details about the kernel and the initrd and some other kernel related data.
2. Profile: It indicates a distribution, a kickstart file and occasionally repositories.
3. System: It indicates the machine for provisioning. It uses profiles for configuring the machine and holds information about IP and MAC addresses.
4. Repository: It carries mirroring data for a yum or rsync repository.
5. Image: It points to the file path where the OS is located. The image object is used to replace the distribution object in case specific files cannot be divided into the kernel and initrd categories.

Terraform uses the Cobbler provider to translate all the Cobbler objects to the corresponding Terraform resources for provisioning bare metal machines (Figure 13).
The system object is the main element during the configuration, as it determines the desired machine for provisioning. The configuration of a system resource includes:

1. Name of the system resource
2. Profile: The name of the preferred profile for the provisioned machine. The user can create several profiles by using the respective Terraform resource. The
configuration of a Terraform profile resource includes:
   1. Name for the profile resource
   2. Name of the preferred distribution: Distributions are a separate Terraform resource. The configuration of the distribution includes:
      - Name for the distribution
      - OS Breed: E.g., Redhat, Fedora, CentOS, Ubuntu
      - OS Version: E.g., trusty
      - OS Architecture: E.g., i385, x86_64, ia64, etc.
      - Kernel Path: Path in the filesystem that indicates the kernel files.
      - Initrd Path: Path in the filesystem that indicates the initrd files.
   3. Path to the selected kickstart file
   4. Name of the repo resource: The user creates repos with a separate Terraform resource and declares the name of the preferred repo resource during the configuration of the profile. The repo resource includes a name for the resource and a url address for the yum or rsync mirror.
3. Hostname: The hostname of the machine after provisioning.
4. MAC address: The MAC address of the machine that is selected for provisioning.
5. IP address: The preferred IP address of the machine after provisioning.
6. Power options: Aspects regarding power management, such as the type, the user and the password.

`Provisioning Containers` - Magnum is the Openstack API service that enables the creation and management of container clusters in Openstack. Magnum offers container orchestration engines (COE) as first class resources in Openstack for the control and management of the clusters.
Openstack Heat is used by Magnum for orchestrating the OS image that contains Docker and the selected COE, and runs that image on virtual machines or bare metal
machines in a cluster configuration. The preferred COE for this case study is Kubernetes, as it has surged in popularity in the past several years and it is currently
one of the biggest open source communities. The descripted Magnum features are integrated in Terraform.

The configuration of a cluster in Terraform is shown in Figure 14 and it includes:

1. Name of the cluster
2. Template: The name of the used template for the cluster. A template describes the parameters of the cluster. The user can create several cluster templates using a separate resource. The template configuration consists:
   - Name of the template
   - COE: The name of the preferred orchestration engine for the cluster. The supported COEs are Kubernetes, Docker Swarm and Apache Mesos.
   - OS Image: The OS that is installed on the nodes of the cluster. The supported images differ based on selected COE. Fedora-atomic and CoreOS are the only available for Kubernetes cluster, while Fedora-atomic and Ubuntu are the available images for Docker Swarm and Apache Mesos, respectively.
   - Master flavor: The capabilities of the master nodes in the cluster.
   - Worker flavor: The capabilities of the worker nodes in the cluster.
   - Network driver: Driver that performs networking between the nodes of the cluster (e.g., flannel, calico).
   - Server type: The type of the server of the cluster. The user can select between virtual and bare metal servers, however Ironic, which is the bare metal provisioning service of Openstack, is not supported by Terraform. As a result, Magnum cannot create bare metal clusters using Terraform.
   - DNS IP: IP address of the DNS server for the cluster.
   - Labels: Important external features based on the selected COE (e.g., monitoring features, such as Prometheus with Grafana and dashboard feature for Kubernetes).
3. Master Nodes: Number of master nodes in the cluster
4. Worker Nodes: Number of worker nodes in the cluster
5. Keypair: Used for the secure communication between the cluster nodes (e.g., ssh key pair).

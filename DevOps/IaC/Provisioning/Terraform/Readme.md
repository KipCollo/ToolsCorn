# Terraform

Terraform is a powerful tool designed by HashiCorp that helps you set up, manage, and update infrastructure safely and efficiently across various cloud providers. Think of it as a way to define your cloud resources—like servers, storage, and networks—using a simple code format. This makes it easier to automate, share, and manage your infrastructure, ensuring that everything is consistent and can be quickly reproduced or modified as needed.

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

Terraform stores the state of the managed infrastructure in a local file called `terraform.tfstate`. This file can also be stored remotely which is useful when working in a
remotely distributed team. This local state is used to create the execution plans and make the necessary infrastructure changes. After each performed operation, Terraform refreshes the state in order to match the actual real time infrastructure.

Terraform is an infrastructure provisioning tool, not a CM tool. Provisioning tools deploy and manage infrastructure, whereas CM tools like Ansible, Puppet, SaltStack, and Chef deploy software onto existing servers. Some CM tools can also perform a degree of infrastructure provisioning, but not as well as Terraform, because this isn’t the task they were originally designed to do.
The difference between CM and provisioning tools is a matter of philosophy. CM tools favor mutable infrastructure, whereas Terraform and other provisioning tools
favor immutable infrastructure.
Mutable infrastructure means you perform software updates on existing servers.Immutable infrastructure, by contrast, doesn’t care about existing servers—it treats infrastructure as a disposable commodity. The difference between the two paradigms can be summarized as a reusable versus disposable mentality.

The main reason Terraform is so easy to use is that the code is written in a domain- specific configuration language called HashiCorp Configuration Language (HCL). It’s a language invented by HashiCorp as a substitute for more verbose configuration languages like JSON and XML. HCL attempts to strike a balance between human and
machine readability and was influenced by earlier attempts in the field, such as libucl and Nginx configuration. HCL is fully compatible with JSON, which means HCL can be converted 1:1 to JSON and vice versa. This makes it easy to interoperate with systems outside of Terraform or generate configuration code on the fly.

Terraform allows us to automate and manage infrastructure,platform and services that run on that platform.

## Installation

Using tfenv

```bash
tfenv install <version>
tfenv use <version>
```

You can use package mmanagers.

```sh
brew install terraform
```

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

Terraform uses the Cobbler provider to translate all the Cobbler objects to the corresponding Terraform resources for provisioning bare metal machines.
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


## Files

1. terraform.tf - Terraform provider configurations. i.e dependencies.
2. main.tf - Resource definitions.
3. variables.tf - Defines terraform variables we are using.

```terraform.tf
terraform {
   required_providers {
      aws = {
         source = "hashicorp/aws"
         version = "~> 4.66.0"
      }
      random = {
         source = "hashicorp/random"
         version = "~ 3.5.0"
      }
      archive = {
         resource = "hashicorp/archive"
         version = "~ 2.3.0"
      }
   }

   required_version = "~> 1.4"
}
```

```variable.tf
variable "aws_region" {
   description = "AWS region for all resources."

   type = string
   default = "us-east-1"
}
```

```main.tf
provider "aws" {
   region = var.aws_region
}

data "aws_caller_identity" "current" {}

resource "random_pot" "lambda_bucket_name" {
   prefix = "dreamsofcode"
   lenght = 4
}

resource "aws_s3_bucket" "resource_name"{
   bucket = random_pet.lambda_bucket_name.id
}
```


## Common Commands 

```bash
terraform
terraform --help
terraform --version
terraform version

export AWS_ACCESS_KEY_ID=*******
export AWS_SECRET_ACCESS_KEY=*********
terraform plan # Preview changes.Show changes required by the current configuration
terraform console

terraform apply # Create or update infrastructure
terraform apply -auto-approve
terraform apply -refresh=false
terraform plan -out iam.tfplan
terraform apply "iam.tfplan"
terraform apply -target="aws_iam_user.my_iam_user"
terraform apply -replace="aws_instance.server"

terraform destroy # Destroy previously-created infrastructure
terraform destroy -target="aws_vpc.dev_subnet"

terraform validate

terraform fmt
terraform fmt --diff
terraform fmt -recursive

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
terraform state show <name> # shows the random generated values.
```

## Terraform syntax

Terraform configurations can be either in the native Terraform Language syntax(.tf) or in JSON compatible format(.tf.json).Both are defined in terms of a specification called HCL(Hashicorp Configuration Language).

HashiCorp Configuration Language (HCL) is a configuration language built by HashiCorp that is used for configuring products in the HashiCorp ecosystem. With its human-readable style, HCL is designed to strike a balance between a generic configuration language like JSON or YAML and a high-level scripting language. In relation to the Terraform Roadmap, HCL is the primary language used for writing Terraform configuration files, thus making it a fundamental part of defining and providing data center infrastructure in a descriptive manner.

`HCL, or HashiCorp Configuration Language`, is a human-readable language for DevOps tools. It is used to code infrastructure management and service orchestration in a clear and manageable way. Several HashiCorp products, including Terraform, use HCL as their primary configuration language. Terraform uses HCL to provision and manage cloud resources efficiently. Its clear syntax and structure are instrumental in creating resource modules and configurations that align with the Terraform Roadmap's goals for providing a seamless, user-friendly platform for infrastructure as code.

The Basic Syntax of HashiCorp Configuration Language (HCL) includes defining blocks, attributes, and expressions. Blocks are fundamental units like `resource`, `module`, and `provider`, identified by keywords and enclosed in curly braces. Attributes are key-value pairs within blocks, where keys are strings and values can be strings, numbers, or other data types. Expressions allow embedding variables, functions, and references to other resources, enabling dynamic configurations.

Terraform configuration syntax is built around two key syntax constructs,blocks and arguments.
A block has none, one or more labels.
After the block type keyword in the label,the block body is delimited by a pair of curly braces.Within the block body,there is arguments and other nested blocks.

Terraform syntax comments includes:-

`#`:- Single line commments(Default).The alternative is using double slashes(//)
`/*--*/`:- Multiline comment.


## Project Initialization

Project initialization in Terraform involves setting up the necessary configuration files and directory structure for managing infrastructure as code. The `terraform init` command is crucial in this process, as it initializes the working directory, downloads the required provider plugins, and sets up the backend configuration for storing state files. This command ensures that the project is correctly configured and ready for subsequent Terraform commands, laying the foundation for efficient and organized infrastructure management.


The terraform workflow has 3 core steps:-

1. Writing configurations.
2. Plan/preview the changes before applying changes.
3. Apply to provision resources.

## Writing Configurations

Terraform uses a modular approach.
A terraform module is a directory that contains one or more config files(.tf).This module can call other modules and connect them together.


## Providers

Terraform Providers are plugins that enable interaction with various external APIs. They manage the lifecycle of resources by defining resource types and data sources. Each provider requires configuration, typically including authentication details and endpoint URLs. Providers are specified in the `provider` block, and multiple providers can be used in a single Terraform project to manage resources across different platforms.

`Terraform Providers`:- They are logical abstraction of an upstream API.They are responsible for understanding API interactions and exposing resources.They are plugins that terraform uses to create and manage resources on a specific infrastructure.They usually provides resources to manage a single cloud or infrasturucture platform.
They includes:- AWS,Azure,Google Cloud Platform,Kubernetes,Oracle,Ali Baba,Vault,Docker,http.

There are providers for infrastructure as a service platform as a service and software as a service.Providers are distributed separately from Terraform itself and each provider has its own release.


The `provider` meta-argument in Terraform specifies which provider configuration to use for a resource, overriding the default provider selection based on the resource type name. This is useful in scenarios where multiple configurations of the same provider are required, such as managing resources across different regions or environments. By setting the `provider` argument, you can ensure that the resource uses the specified provider setup, identified by its alias, enhancing control and flexibility in multi-provider or multi-region deployments. This meta-argument is essential for precisely directing Terraform on how to interact with the underlying infrastructure provider.

Provider configurations belong to the root module of a Terraform project,Therefore belongs to *main.tf* file.It is created using a *provider* block.
Configuring providers in Terraform involves specifying the required provider in the `provider` block within your Terraform configuration files. This block includes settings such as authentication credentials, region, and other provider-specific parameters. Providers must be initialized using `terraform init` to download and install the necessary plugins. Multiple configurations can be managed by aliasing providers, enabling resource management across different environments or accounts within the same provider.

```main.tf
provider "provider-name" {

}
```

You place the name of the provider in the provider-name part.i.e aws.The provider should already be included in the `required_provider` blocks.
The body of the block contains the argument of the providers.Most arguments are defined by the provider itself.
Meta-arguments in Terraform resources provide additional control over how resources are managed and interact within the configuration.

## Terraform Registry

The Terraform Registry is a centralized repository for discovering, sharing, and using Terraform modules and providers. It allows users to browse and download pre-built configurations, enabling quick integration of best practices. The registry supports versioning, ensuring consistent deployments, and includes detailed documentation for each module and provider. Users can also publish their own modules to the registry, facilitating community collaboration and reuse.

`Terraform Registry` - It stores providers of publicly available.

## Terraform Resources

Resources represent components of your infrastructure such as Virtual Machines, Storage Buckets, Databases or Virtual Private Clouds. Access to provider resources comes after successful project initalization after declaring your desired providers.

A resource is the fundamental building block of Terraform. It represents the infrastructure components that Terraform manages. Examples of resources include virtual machines, databases,storage buckets, and load balancers.
Resources are defined in resource blocks within the configuration files. Each resource block specifies the type of resource to be managed, the provider that will manage it, and the configuration for that resource.

To define a resource in Terraform, you use the resource block, which has the following format:-

resource "<PROVIDER>_<RESOURCE_TYPE>" "<RESOURCE_NAME>" {
 <CONFIGURATION>
}

- <PROVIDER>:- The cloud provider that manages the resource (e.g., aws, azurerm, google).
- <RESOURCE_TYPE>:- The type of resource being managed (e.g., instance, bucket, vpc).
- <RESOURCE_NAME>:- A user-defined name for the resource within Terraform.How Terraform identifies the resource in its internal state.
- <CONFIGURATION>:- A set of arguments that specify how the resource should be configured.

## Variables in Terraform

Variables in Terraform allow you to parameterize your configuration files. Instead of hardcoding values, you can define variables and use them throughout your configuration. This makes your code more modular and reusable, especially when working across different environments such as development, staging, and production.

Terraform input variables are parameters for modules, declared using variable blocks. They support multiple data types, default values, and descriptions. Users provide values when invoking modules or running Terraform. Accessed via `var.<name>` syntax, input variables enable flexible, reusable infrastructure templates adaptable to various deployment scenarios. They can be marked sensitive for security and are typically defined in a `variables.tf` file.

Terraform uses variables to make configurations more flexible and reusable. Variables can be declared in `.tf` files and assigned values through various methods, including default values, command-line flags, environment variables, or separate `.tfvars` files. They support multiple data types such as string, number, bool, list, and map. Variables can be referenced throughout the configuration using the `var` prefix. This system enables infrastructure as code to be more dynamic and adaptable to different environments or use cases.

Variables in Terraform are declared using the variable block. Each variable can have the following attributes:
1. default: The default value of the variable.
2. type: The type of the variable (e.g., string, list, map).
3. description: A brief description of what the variable represents.
4. sensitive: Marks the variable as sensitive, ensuring it is not displayed in logs or outputs.

Terraform supports several types of variables, including:
1. String: A single value, such as a region or instance type.
2. List: A collection of values. Useful for defining multiple instances, subnets, etc.
3. Map: A collection of key-value pairs. Useful for specifying configuration options in a structured format.
4. Boolean: A true or false value.

There are several ways to pass values to variables in Terraform:
1. Default Values: If no value is provided, Terraform will use the default value defined in the variable block.
2. Command Line Flags: You can pass variables directly through the terraform apply or terraform plan command using the -var flag.
3. Environment Variables: Variables can be set using environment variables. For example, to pass the AWS region, you can use:
4. Terraform .tfvars Files: Variables can be defined in a separate .tfvars file and passed to Terraform during runtime. Example of a terraform.tfvars file:

```sh
terraform apply -var="aws_region=us-east-1"

export TF_VAR_aws_region=us-east-1
export AWS_SECRET_ACCESS_KEY=
export AWS_ACCESS_KEY_ID=

terraform apply
```

```terraform.tfvars
aws_region = "us-east-1" 
instance_type = "t2.medium"
```

```bash
terraform apply -var-file="terraform.tfvars" # Not compulsory to add the file,terraform can detect
```

`Environment variables`:-

## Data Sources

Data sources allow you to query and reference existing infrastructure outside of Terraform. This is useful for situations where you need to use resources that are managed by another team, project, or process but still want to integrate them into your Terraform configuration.
Data Sources Allow data to be fetched dynamically for use in Terraform configuration.
Data source let's you query existing resources from provider.
A data source in Terraform allows you to read information about existing infrastructure components.Data sources do not create new resources; instead, they retrieve data about resources that already exist.

## Output

**Outputs**:- Terraform outputs expose selected values from a configuration or module, making them accessible to users or other modules. Defined in output blocks, typically in an `outputs.tf` file, they can reference resource attributes or other computed values. Outputs are displayed after apply operations, can be queried using terraform output commands, and are crucial for passing information between modules or to external systems.

Outputs in Terraform allow you to extract and share data from your infrastructure. They can be used to display essential information after resources are provisioned or to pass values between Terraform modules.

You can define an output using the output block. Each output block contains:
1. value: The value to output (typically, the result of a resource attribute).
2. description: A brief description of the output (optional).
3. sensitive: If set to true, the value will not be displayed in the Terraform output logs.

```tf
output "instance_public_ip" { 
   value = aws_instance.my_instance.public_ip 
   description = "The public IP address of the EC2 instance."
}
```

After applying the configuration, you can view outputs by running the terraform output command: `terraform output`
This command will display all the outputs defined in your configuration. 

To view a specific output, you can run: `terraform output instance_public_ip`


**Initializing directory**:- terraform init - Initializes and Downloads providers
Ater running the command `terraform init`,it creates `.terraform` directory and a file called .`terraform.lock.hcl`.
- .terraform.lock.hcl - A dependency lock file that is created or updated after running init.Contains all versions of providers.It is part of terraform strategy for defence against attacks(checksums in providers).
- .terraform - 

`terraform plan`:- The plan command lets you see what Terraform will do before actually making any changes.The output of the plan command is similar to the output of the diff command that is part of Unix, Linux, and git: anything with a plus sign (+) will be created, anything with a minus sign (–) will be deleted, and anything with a tilde sign (~) will be modified in place.

`terraform plan -out=tfplan`

## Terraform State Management

Terraform uses a `state file` (terraform.tfstate) to keep track of the resources it manages. This state file serves as a snapshot of your infrastructure's current configuration, allowing Terraform to know what resources it has created, updated, or destroyed.

Without state, Terraform would have to query your cloud provider’s API every time to check the current status of resources. Instead, the state file allows Terraform to incrementally manage resources by comparing the current infrastructure state (stored in the state file) with the desired configuration (defined in .tf files).
when you run terraform apply, Terraform reads the state file to determine:

1. What resources exist.
2. Which resources need to be created, modified, or destroyed.

When Terraform creates or modifies resources, it updates the state file to reflect the changes. For example, when you provision an EC2 instance on AWS, Terraform saves information about that instance (like the instance ID and public IP) in the state file.

Here’s how Terraform uses state:
1. State Initialization: When you first run terraform init, Terraform creates an empty state file or fetches an existing one if it’s stored remotely.
2. State Refresh: Terraform refreshes the state by querying the provider's API to make sure the state file matches the actual state of resources.
3. Plan: When you run terraform plan, Terraform compares the state file to the configuration files to generate a plan of what needs to be changed.
4. Apply: After reviewing the plan, terraform apply updates the infrastructure and the state file accordingly.
5. Destroy: When running terraform destroy, Terraform reads the state file to identify and delete the existing resources.

By default, Terraform stores the state file locally in the directory where you run Terraform (terraform.tfstate). However, for collaborative environments or projects, it's better to store the state file in a remote backend (like Amazon S3 or Azure Blob Storage) to avoid conflicts when multiple team members work on the same infrastructure.

The state file contains information about all the resources Terraform manages. This includes:
- Resource IDs: Unique identifiers for the resources created, such as EC2 instance IDs or S3 bucket names.
- Resource Attributes: Additional information like IP addresses, security group rules, or subnet IDs.
- Outputs: Any values specified in output blocks, such as public IP addresses or database endpoints.

Sensitive information, such as passwords or access keys, may also be stored in the state file. This is why it’s important to protect the state file and ensure it’s not accessible to unauthorized users.

`terraform state`:-

## Terraform modules

Modules are self-contained packages of code that allow you to create reusable components by grouping related resources together.Modules are useful tools for promoting software abstraction and code reuse.

The syntax for module declarations is:-

```tf
module "lb_sg"{
   source = "terraform/sg/aws"
   version = "1.0.0"

   vpc_id = module.vpc.vpc_id
   ingress_rules = [{
      port = 80
      cidr_blocks = ["0.0.0.0/0"]
   }]
}
```

## Terraform Workspaces

Terraform workspaces allow you to manage multiple environments (e.g., development, staging, production) from the same configuration. Each workspace has its own separate state file, which means that changes in one workspace won’t affect the resources in another workspace.
By default, Terraform operates in a single workspace called default. However, you can create additional workspaces to manage different environments using the same configuration files.
Workspaces are useful when:

1. You want to maintain separate infrastructure environments (e.g., dev, staging, prod) without duplicating configuration code.
2. You need to create isolated copies of the infrastructure for testing or QA purposes.

Each workspace has its own state, so the resources created in one workspace are independent of those in another.
ou can create a new workspace using the terraform workspace new command, and switch between workspaces using the terraform workspace select command.

```bash
terraform workspace new dev #This creates a new workspace called dev. Terraform will automatically create a new state file for this workspace.
workspace select dev
workspace list
```

You can reference the active workspace in your configuration using the terraform.workspace variable.This is useful for customizing resource names or tags based on the workspace.

```tf
resource "aws_instance" "name" {
  tags = {
    Name ="My-Instance-${terraform.workspace}"
  }
}
```

## Security and secrets management

Terraform is an infrastructure provisioning technology and therefore handles a lot of secrets.
Secrets like database passwords, personal identification information (PII), and encryption keys may all be consumed and managed by Terraform. Worse, many of these secrets appear as plaintext, either in Terraform state or in log files.
Secrets management is about keeping your secret information secret. Best practices for secrets management with Terraform, include the
following:

- `Securing state files`:- Sensitive information will inevitably find its way into Terraform state pretty much no matter what you do.Terraform is fundamentally a state-management tool, so to perform basic execution tasks like drift detection, it needs to compare previous state with current state.
Terraform does not treat attributes containing sensitive data any differently than it treats non-sensitive attributes. Therefore, any and all sensitive data is put in the state file, which is stored as plaintext JSON. Because you can’t prevent secrets from making their way into Terraform state, it’s imperative that you treat the state file as sensitive and secure it accordingly.
Methods for securing state files:
   1. Removing unnecessary secrets from Terraform state
   2. Least-privileged access control
   3. Encryption at rest.

- `Securing logs`

- `Managing static secrets(static credentials)`:- Static secrets are sensitive values that do not change, or at least do not change often.
Most secrets can be classified as static secrets. Things like username and passwords, long-lived oAuth tokens, and config files containing credentials are all examples of static secrets.

There are two major ways to pass static secrets into Terraform: as environment variables and as Terraform variables.

- `Dynamic just-in-time secrets`
- `Enforcing “policy as code” with Sentinel`


The terraform binary contains the basic functionality for Terraform, but it does not come with the code for any of the providers (e.g., the AWS Provider, Azure provider, GCP provider, etc.), so when you’re first starting to use Terraform, you need to run terraform init to tell Terraform to scan the code, figure out which providers you’re using, and download the code for them. By default, the provider code will be downloaded into a .terraform folder, which is Terraform’s scratch directory (you may want to add it to .gitignore). Terraform will also record information about the provider code it downloaded into a .terraform.lock.hcl file

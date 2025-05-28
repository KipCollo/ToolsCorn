# Terraform

But what exactly is Terraform? Simply put, Terraform is a powerful open source IaC tool that lets you define your infrastructure in human-readable configuration files. Instead of manually clicking through clunky web interfaces, you write code that describes the infrastructure you need. This code essentially becomes a blueprint for your infrastructure, allowing you to:

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

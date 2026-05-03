terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

variable "aws_key_pair" {
  default = "~/aws/aws_keys/default-ec2.pem"
}

variable "vpc_name" {
  description = "VPC Name"
}

// AWS resources

//VPC
resource "aws_vpc" "vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    "Name" = "Production ${var.vpc_name}" # String interpolation
  }
  
}

//subnet
resource "aws_subnet" "subnet" {
  vpc_id = aws_vpc.vpc.id
  cidr_block = "10.0.0.0/24 "
}

// EC2
resource "aws_instance" "api-server" {
  ami = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  vpc_security_group_ids = ""
  user_data = ""
  subnet_id = ""
  depends_on = [ aws_vpc.vpc ]
  monitoring = true
  availability_zone = ""
  connection {
    host = self.public_ip
    private_key = var.aws_key_pair
  }
}

output "public_ip_address" {
  value = aws_instance.api-server.public_ip
}

data "aws_vpc" "existing_vpc" {
  default = true
}

resource "aws_subnet" "subnet_1" {
  vpc_id = data.aws_vpc.existing_vpc.id
  cidr_block = "10.0.0.0/24 "
}


# GCP Provider
provider "google" {
  project = "my-project"
  region = "us-central1"
}

# Azure Resources
resource "google_storage_bucket" "my_bucket" {
  name = "my-storage-bucket"
  location = "US"
}



# Azure Provider
provider "azurerm" {
  features {
    
  }
}

# Azure Resources
resource "azurerm_resource_group" "default" {
  name = ""
  location = ""
}

resource "random_string" "rand" {
  length = 24
  upper = false
}
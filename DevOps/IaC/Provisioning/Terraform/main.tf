//AWS Provider
provider "aws" {
  region     = ""
  access_key = ""
  secret_key = ""
}

// AWS resources

//VPC
resource "aws_vpc" "vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    "Name" = "Main VPC"
  }
  
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
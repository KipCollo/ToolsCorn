provider "aws"{
   region = "east-us"
   access_key = ""
}

## VPC
resource "aws_vpc" "Main_VPC" {
  cidr_block = ""
  enable_dns_hostnames = ""
}

resource "aws_flow_log" "name" {
  vpc_id = ""
  traffic_type = ""
  destination_options {
    
  }
}

resource "aws_vpc_peering_connection" "name" {
  vpc_id = ""
  peer_vpc_id = ""
}

## Internet Gateway
resource "aws_internet_gateway" "IGW" {
  vpc_id = ""
}

## Network Access Control List
resource "aws_network_acl" "name" {
  vpc_id = ""
}

resource "aws_network_acl_rule" "name" {
  network_acl_id = ""
  rule_number = ""
  protocol = ""
  rule_action = ""
}

## VPN
resource "aws_vpn_gateway" "name" {
  vpc_id = ""
}

resource "aws_vpn_gateway_attachment" "name" {
  vpn_gateway_id = ""
  vpc_id = ""
}

## Subnet
resource "aws_subnet" "private_subnet" {
  vpc_id = ""
}

## NAT Gateway
resource "aws_nat_gateway" "name" {
  subnet_id = ""
}

## EC2 Instance
resource "aws_instance" "server" {
  ami = ""
  instance_type = ""
  vpc_security_group_ids = [  ]
  user_data = ""
  associate_public_ip_address = ""
  key_name = ""
  iam_instance_profile = ""
  subnet_id = ""
  count = ""
  depends_on = [ aws_instance.api-server ]
  monitoring = true
  availability_zone = ""
  metadata_options {
   
  }
  disable_api_termination = true
  tags = {
    
  }
}

## AWS S3 Bucket
resource "aws_s3_bucket" "name" {
  bucket = ""
  region = ""
  lifecycle {
    
  }
}

resource "aws_s3_bucket_versioning" "name" {
  bucket = ""
  versioning_configuration {
    status = ""
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "name" {
  bucket = ""
  rule {
    
  }
}

## AWS RDS
resource "aws_db_instance" "name" {
  engine = "mysql"
  instance_class = "db.t2.micro"
  allocated_storage = 20
  username = ""
  password = ""
  multi_az = ""
  backup_retention_period = 2
  tags = {
    Name ="MyDB"
    Environment="Production"
  }
}

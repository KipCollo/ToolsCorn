provider "aws" {
  region     = ""
  access_key = ""
  secret_key = ""
}

resource "aws_vpc" "vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    "Name" = "Main VPC"
  }
}

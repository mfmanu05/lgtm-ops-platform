variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}


variable "instance_type" {
  description = "EC2 size"
  type        = string
  default     = "t3.micro"
}


variable "key_name" {
  description = "SSH key pair"
  type        = string
}


variable "project_name" {
  type    = string
  default = "lgtm-platform"
}

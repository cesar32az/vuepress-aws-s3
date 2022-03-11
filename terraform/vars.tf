# default dev values
variable "profile" {
  type        = string
  description = "Profile name to AWS credentials"
}

variable "region" {
  type        = string
  description = "AWS region"
}

variable "environment" {
  type = string
}

variable "domain_name" {
  type        = string
  description = "Domain name to unique name s3 bucket"
}

variable "website_root" {
  type        = string
  description = "Path to the root of website content"
}

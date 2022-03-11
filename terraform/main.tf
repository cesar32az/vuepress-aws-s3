terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0.0"
    }
  }
  required_version = ">= 1.1.0"
}

provider "aws" {
  profile = var.profile
  region  = var.region
}

data "aws_iam_policy_document" "website_policy" {
  statement {
    principals {
      identifiers = ["*"]
      type        = "AWS"
    }
    sid     = "PublicReadGetObject"
    actions = ["s3:GetObject"]
    resources = [
      "arn:aws:s3:::${var.domain_name}/*"
    ]
  }
}

resource "aws_s3_bucket" "static_website" {
  bucket = var.domain_name
  acl    = "private"
  policy = data.aws_iam_policy_document.website_policy.json
  website {
    index_document = "index.html"
    error_document = "404.html"
  }
  tags = {
    Environment = var.environment
    Name        = var.domain_name
  }
}

module "template_files" {
  source   = "hashicorp/dir/template"
  base_dir = var.website_root
}

resource "aws_s3_bucket_object" "files" {
  bucket = aws_s3_bucket.static_website.id
  acl    = "public-read"

  for_each = module.template_files.files

  key    = each.key
  content_type = each.value.content_type
  source  = each.value.source_path
  content = each.value.content
}

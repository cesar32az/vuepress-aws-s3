# Reach documentation

## Build static site

```sh
cd vuepress-starter
npm run build
```

## Deploy the project into s3 bucket


``` sh
cd terraform
terraform init
terraform plan -var-file="prod.tfvars"
terraform apply -var-file="prod.tfvars"
```

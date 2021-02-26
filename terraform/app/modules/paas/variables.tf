variable environment {
}

variable app_docker_image {
}

variable app_env_values {
}

variable app_start_timeout {
  default = 300
}

variable app_stopped {
  default = false
}

variable service_name {
}
variable space_name {
}

variable web_app_deployment_strategy {
}

variable web_app_instances {
  default = 1
}

variable web_app_memory {
  default = 512
}

variable web_app_start_command {
}

locals {

  app_env_domain  = {
    "DOMAIN" = "dfe-meeting-timer-${var.environment}.london.cloudapps.digital"
    "GOVUK_APP_DOMAIN" = "dfe-meeting-timer-${var.environment}.london.cloudapps.digital"
    "GOVUK_WEBSITE_ROOT" = "dfe-meeting-timer-${var.environment}.london.cloudapps.digital"
  }
  app_environment = merge(
    local.app_env_domain,
    var.app_env_values #Because of merge order, if present, the value of DOMAIN in .tfvars will overwrite app_env_domain
  )
  web_app_name             = "${var.service_name}-${var.environment}"
}
resource cloudfoundry_app web_app {
  name = local.web_app_name
  command = var.web_app_start_command
  docker_image = var.app_docker_image
  health_check_type = "http"
  health_check_http_endpoint = "/check"
  health_check_timeout = 180
  instances = var.web_app_instances
  memory = var.web_app_memory

  space = data.cloudfoundry_space.space.id
  stopped = var.app_stopped
  strategy = var.web_app_deployment_strategy
  timeout = var.app_start_timeout
  routes {
    route = cloudfoundry_route.web_app_route.id
  }
  environment = local.app_environment
}

resource cloudfoundry_route web_app_route {
  domain   = data.cloudfoundry_domain.cloudapps_digital.id
  space    = data.cloudfoundry_space.space.id
  hostname = local.web_app_name
}
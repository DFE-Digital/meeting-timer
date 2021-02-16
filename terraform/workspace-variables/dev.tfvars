# Platform
environment = "dev"
app_environment = "dev"

# Gov.UK PaaS
paas_api_url = "https://api.london.cloud.service.gov.uk"
paas_space_name = "dfe-timer-dev"
paas_app_start_timeout = "180"
paas_app_stopped = false
paas_web_app_deployment_strategy = "blue-green-v2"
paas_web_app_instances = 1
paas_web_app_memory = 512
paas_web_app_start_command = "dotnet run"
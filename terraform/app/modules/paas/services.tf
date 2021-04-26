data "cloudfoundry_service" "postgres" {
  name = "postgres"
}

resource "cloudfoundry_service_instance" "postgres_common" {
  name         = "${var.service_name}-postgres-${var.environment}"
  space        = data.cloudfoundry_space.space.id
  service_plan = var.paas_postgres_service_plan
}
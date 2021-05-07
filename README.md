![.Net](https://github.com/DFE-Digital/meeting-timer/workflows/.NET/badge.svg) ![React](https://github.com/DFE-Digital/meeting-timer/workflows/React/badge.svg)


# MeetingTimer

MeetingTimer is a... It uses...

# Getting started

## Prerequisites

- [.NET SDK](https://docs.microsoft.com/en-us/dotnet/core/sdk) - includes the [.NET CLI](https://docs.microsoft.com/en-us/dotnet/core/tools/)
- [Node.js](https://nodejs.org/en/download/) - includes [npm](https://docs.npmjs.com/)
- [Entity Framework CLI tools](https://docs.microsoft.com/en-us/ef/core/cli/dotnet)

To confirm that the prerequisites are installed, the following commands should return a version number:

```bash
dotnet --version
node --version
npm --version
dotnet ef --version
```

## Installation

Clone the project:

```bash
git clone https://github.com/DFE-Digital/meeting-timer.git
```

### ASP.NET Core

Navigate to `./MeetingTimer`

Restore the .NET project dependencies:

```bash
dotnet restore
```
### Cloudfoundry CLI

In order to deploy applications or backing services to Gov PaaS manually, check their status, or connect to Gov PaaS hosted backing services from an app running locally, you must install the [Cloudfoundry CLI](https://github.com/cloudfoundry/cli/wiki/V7-CLI-Installation-Guide).

See the [Gov PaaS Get Started](https://docs.cloud.service.gov.uk/get_started.html#get-started) guide on how to use the CF CLI to interact with Gov PaaS.

### Database

This app uses a PostgreSQL database to persist Hosts, Members and Sessions. The database connection string is constructed using the VCAP_SERVICES environment variable (see `DbConfiguration.cs`).

Upon submission of a PR, a review instance of the app and a PostgreSQL service are automatically created in Gov PaaS and bound to each other - this sets the `VCAP_SERVICES` automatically.

If you wish to run the app locally and connect to a locally hosted database, you should first install PostgreSQL and create a database before updating the `VCAP_SERVICES` environment variable in `launchSettings.json` with the correct credentials for your database.

You may also run the app locally and connect to a Gov PaaS hosted PostgreSQL service by installing the Conduit plugin for Cloudfoundry. Using the command line:

`cf install-plugin conduit`

then connecting to the service once logged into the correct space (e.g. `dfe-timer-dev`):

`cf conduit SERVICE_NAME`

You should then receive a list of the credentials for the PostgreSQL backing service, with which you must update the `VCAP_SERVICES` environment variable in `launchSettings.json`:

```bash
{\"postgres\": [{\"instance_name\": \"rdsbroker_277c8858_eb3a_427b_99ed_0f4f4171701e\",\"credentials\": {\"host\": \"127.0.0.1\",\"name\": \"rdsbroker_277c8858_eb3a_427b_99ed_0f4f4171701e\",\"username\": \"******\",\"password\": \"******\",\"port\": \"7080\"}}]}
```

### React

Navigate to `./MeetingTimer/ClientApp`

Install Node.js dependencies:

```bash
npm install
```

## Run the project

1. Update the database. See [Apply Migration](#apply-migration). This will create a SQLite database file at `./MeetingTimer/Data`

2. Run the application. Navigate to `./MeetingTimer`:

```bash
dotnet run
```

3. The app will be available at:

```bash
https://localhost:5001/
```

# Swagger UI

[Swashbuckle](https://github.com/domaindrivendev/Swashbuckle.AspNetCore) is used to automatically generate API documentation via Swagger.

To view the interactive documentation with SwaggerUI go to:

```bash
https://localhost:<PORT>/api-documentation
```

# Migrations

In order to use the Entity Framework core CLI tools they must first be installed. See [prerequisites](#prerequisites), or run:

```bash
dotnet tool install --global dotnet-ef
```

First navigate to `./MeetingTimer`

### Add migration

Migration names should be descriptive and in the imperative mood. You will not need to specifiy the output directory; new migrations will follow the previous migration located at `./MeetingTimer/Data/Migrations`. To add a migration:

```bash
dotnet ef migrations add <NAME OF MIGRATION>
```

### Apply migration

To update the database by applying pending migrations:

```bash
dotnet ef database update
```

# Linting

Prettier is used for code formatting. To enforce stylistic rules with Prettier, run:

```bash
# To format a file:
npx prettier <PATH TO YOUR FILE>

# To format the src folder:
npm run prettier
```

ESLint is used for static analysis of JavaScript code quality. It is configured to ignore stylistic rules that conflict with Prettier.

```bash
# To lint a file:
npx eslint <PATH TO YOUR FILE>

# To lint the src folder:
npm run lint
```

Append `--write` or `--fix` to prettier and eslint commands respectively to automatically fix, where possible, any problems detected.

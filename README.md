![.Net](https://github.com/DFE-Digital/meeting-timer/workflows/.NET/badge.svg)

![React](https://github.com/DFE-Digital/meeting-timer/workflows/react.yml/badge.svg)


# MeetingTimer

MeetingTimer is a... It uses...

# Getting started

## Prerequisites

- [.NET SDK](https://docs.microsoft.com/en-us/dotnet/core/sdk) - includes the [.NET CLI](https://docs.microsoft.com/en-us/dotnet/core/tools/)
- [Node.js](https://nodejs.org/en/download/) - includes [npm](https://docs.npmjs.com/)
- [Entity Framework CLI tools](https://docs.microsoft.com/en-us/ef/core/cli/dotnet)

To confirm that the prerequisites are installed, the following commands should return a version number:

```js
dotnet --version
node --version
npm --version
dotnet ef --version
```

## Installation

Clone the project:

```js
git clone https://github.com/DFE-Digital/meeting-timer.git
```

### ASP.NET Core

Navigate to `./MeetingTimer`

Restore the .NET project dependencies:

```js
dotnet restore
```

### React

Navigate to `./MeetingTimer/ClientApp`

Install Node.js dependencies:

```js
npm install
```

## Run the project

1. Update the database. See [Apply Migration](#apply-migration). This will create a SQLite database file at `./MeetingTimer/Data`

2. Run the application. Navigate to `./MeetingTimer`:

```js
dotnet run
```

3. The app will be available at:

```js
https://localhost:5001/
```

# Swagger UI

[Swashbuckle](https://github.com/domaindrivendev/Swashbuckle.AspNetCore) is used to automatically generate API documentation via Swagger.

To view the interactive documentation with SwaggerUI go to:

```js
https://localhost:<PORT>/api-documentation
```

# Migrations

In order to use the Entity Framework core CLI tools they must first be installed. See [prerequisites](#prerequisites), or run:

```js
dotnet tool install --global dotnet-ef
```

First navigate to `./MeetingTimer`

### Add migration

Migration names should be descriptive and in the imperative mood. You will not need to specifiy the output directory; new migrations will follow the previous migration located at `./MeetingTimer/Data/Migrations`. To add a migration:

```js
dotnet ef migrations add <NAME OF MIGRATION>
```

### Apply migration

To update the database by applying pending migrations:

```js
dotnet ef database update
```

# Linting

Prettier is used for code formatting. To enforce stylistic rules with Prettier, run:

```js
# To format a file:
npx prettier <PATH TO YOUR FILE>

# To format the src folder:
npm run prettier
```

ESLint is used for static analysis of JavaScript code quality. It is configured to ignore stylistic rules that conflict with Prettier.

```js
# To lint a file:
npx eslint <PATH TO YOUR FILE>

# To lint the src folder:
npm run lint
```

Append `--write` or `--fix` to prettier and eslint commands respectively to automatically fix, where possible, any problems detected.

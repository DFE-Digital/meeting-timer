# https://hub.docker.com/_/microsoft-dotnet
FROM mcr.microsoft.com/dotnet/sdk:5.0.102-ca-patch-buster-slim AS build-env

# Install node.js
RUN curl --silent --location https://deb.nodesource.com/setup_10.x | bash - && apt-get install --yes nodejs

# Copy MeetingTimer
WORKDIR /app
COPY MeetingTimer/ ./

# Build and publish
RUN dotnet publish -c release -o out
EXPOSE 8080
# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:5.0
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "MeetingTimer.dll"] 
# https://hub.docker.com/_/microsoft-dotnet
FROM mcr.microsoft.com/dotnet/sdk:5.0.102-ca-patch-buster-slim AS build

# Fetch and install Node 10. Make sure to include the --yes parameter 
# to automatically accept prompts during install, or it'll fail.
RUN curl --silent --location https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install --yes nodejs

WORKDIR /source

# copy csproj and restore as distinct layers
COPY MeetingTimer/*.csproj ./MeetingTimer/
WORKDIR /source/MeetingTimer
RUN dotnet restore MeetingTimer.csproj

# copy everything else and build app
COPY MeetingTimer/. ../MeetingTimer/
WORKDIR /source/MeetingTimer
RUN dotnet publish MeetingTimer.csproj -c release -o /app --no-restore


# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /app
EXPOSE 80

COPY --from=build /app ./
ENTRYPOINT ["dotnet", "MeetingTimer.dll"]
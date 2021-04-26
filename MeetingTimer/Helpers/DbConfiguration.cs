using MeetingTimer.Data;
using MeetingTimer.Models;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace MeetingTimer.Helpers
{
    public class DbConfiguration
    {
        private readonly MeetingTimerDbContext _dbContext;

        public DbConfiguration(MeetingTimerDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public static string GenerateConnectionString()
        {
            var options = new JsonSerializerOptions() { PropertyNameCaseInsensitive = true };
            VcapServices vcapServices = JsonSerializer.Deserialize<VcapServices>(Environment.GetEnvironmentVariable("VCAP_SERVICES"), options);

            var postgres = vcapServices.Postgres.First();

            var builder = new NpgsqlConnectionStringBuilder
            {
                Host = postgres.Credentials.Host,
                Database = postgres.Credentials.Name,
                Username = postgres.Credentials.Username,
                Password = postgres.Credentials.Password,
                Port = postgres.Credentials.Port,
                SslMode = SslMode.Require,
                TrustServerCertificate = true,
            };

            return builder.ConnectionString;
        }

        public void Migrate()
        {
            _dbContext.Database.Migrate();
        }
    }

    internal class VcapServices
    {
        public IEnumerable<VcapPostgres> Postgres { get; set; }
    }

    internal class VcapPostgres
    {
        [JsonPropertyName("instance_name")]
        public string InstanceName { get; set; }
        public VcapCredentials Credentials { get; set; }
    }

    internal class VcapCredentials
    {
        public string Host { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public int Port { get; set; }
    }
}

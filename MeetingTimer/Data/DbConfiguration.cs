using MeetingTimer.Utils;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace MeetingTimer.Data
{
    public class DbConfiguration
    {
        private readonly MeetingTimerContext _dbContext;

        public DbConfiguration(MeetingTimerContext dbContext)
        {
            _dbContext = dbContext;
        }

        public static string DatabaseConnectionString(IEnv env) =>
            GenerateConnectionString(env, env.DatabaseInstanceName);

        public void Migrate()
        {
            _dbContext.Database.Migrate();
        }

        private static string GenerateConnectionString(IEnv env, string instanceName)
        {
            var options = new JsonSerializerOptions() { PropertyNameCaseInsensitive = true };
            var vcap = JsonSerializer.Deserialize<VcapServices>(env.VcapServices, options);
            var postgres = vcap.Postgres.First(p => p.InstanceName == instanceName);

            var builder = new NpgsqlConnectionStringBuilder
            {
                Host = postgres.Credentials.Host,
                Database = postgres.Credentials.Name,
                Username = postgres.Credentials.Username,
                Password = postgres.Credentials.Password,
                Port = postgres.Credentials.Port,
                //IntegratedSecurity = true,
                //Pooling = true,
                //SslMode = SslMode.Require,
                //TrustServerCertificate = true,
            };

            return builder.ConnectionString;
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
}

using MeetingTimer.Models;
using Microsoft.EntityFrameworkCore;

namespace MeetingTimer.Data
{
    public class MeetingTimerContext : DbContext
    {
        public DbSet<Session> Sessions { get; set; }
        public DbSet<Host> Hosts { get; set; }
        public DbSet<Member> Members { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
          => optionsBuilder.UseSqlite("Data Source=Data/MeetingTimerDB.db");
    }
}

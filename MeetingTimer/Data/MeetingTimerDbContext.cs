using MeetingTimer.Models;
using Microsoft.EntityFrameworkCore;

namespace MeetingTimer.Data
{
    public class MeetingTimerDbContext : DbContext
    {
        public MeetingTimerDbContext(DbContextOptions<MeetingTimerDbContext> options) : base(options) { }
        public DbSet<Session> Sessions { get; set; }
        public DbSet<Host> Hosts { get; set; }
        public DbSet<Member> Members { get; set; }
    }
}

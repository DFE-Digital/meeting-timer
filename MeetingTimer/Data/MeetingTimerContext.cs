using MeetingTimer.Models;
using Microsoft.EntityFrameworkCore;

namespace MeetingTimer.Data
{
    public class MeetingTimerContext : DbContext
    {
        public MeetingTimerContext(DbContextOptions<MeetingTimerContext> options) : base(options) { }
        public DbSet<Session> Sessions { get; set; }
        public DbSet<Host> Hosts { get; set; }
        public DbSet<Member> Members { get; set; }
    }
}

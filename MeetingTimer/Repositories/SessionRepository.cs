using MeetingTimer.Data;
using MeetingTimer.Models;
using MeetingTimer.Repositories.Interfaces;
using System.Threading.Tasks;

namespace MeetingTimer.Repositories
{
    public class SessionRepository : ISessionRepository
    {
        private readonly MeetingTimerDbContext _context;

        public SessionRepository(MeetingTimerDbContext context)
        {
            _context = context;
        }

        public async Task<Session> CreateSession()
        {
            var host = new Host();

            _context.Hosts.Add(host);

            var newSession = new Session()
            {
                Host = host
            };

            await _context.Sessions.AddAsync(newSession);

            await _context.SaveChangesAsync();
            return newSession;
        }

        public async Task<Session> GetSessionById(int id)
        {
            return await _context.Sessions.FindAsync(id);
        }
    }
}

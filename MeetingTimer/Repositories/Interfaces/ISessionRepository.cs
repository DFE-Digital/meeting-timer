using MeetingTimer.Models;
using System.Threading.Tasks;

namespace MeetingTimer.Repositories.Interfaces
{
    public interface ISessionRepository
    {
        Task<Session> CreateSession();
    }
}

namespace MeetingTimer.Models
{
    public class Member
    {
        public int MemberId { get; set; }

        public int SessionId { get; set; }
        public Session Session { get; set; }
    }
}

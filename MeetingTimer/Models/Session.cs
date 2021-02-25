using System.Collections.Generic;

namespace MeetingTimer.Models
{
    public class Session
    {
        public int SessionId { get; set; }

        public int HostId { get; set; }
        public Host Host { get; set; }
        public List<Member> Members { get; set; }
    }
}

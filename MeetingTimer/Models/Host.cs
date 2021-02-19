using System.Collections.Generic;

namespace MeetingTimer.Models
{
    public class Host
    {
        public int HostId { get; set; }

        public List<Session> Sessions { get; set; }
    }
}

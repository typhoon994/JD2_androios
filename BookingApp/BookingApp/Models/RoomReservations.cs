using System;
using System.Collections.Generic;
using System.Text;
using System.IO;



namespace BookingApp.Models
{
    public class RoomReservations {

		private string endDate;
		private string startDate;
		private DateTime? timestamp;
		public List<User> m_User;
		public List<Room> m_Room;

		public RoomReservations(){

		}

		~RoomReservations(){

		}

		public string EndDate{
			get{
				return endDate;
			}
			set{
				endDate = value;
			}
		}

		public string StartDate{
			get{
				return startDate;
			}
			set{
				startDate = value;
			}
		}

		public DateTime? Timestamp{
			get{
				return timestamp;
			}
			set{
				timestamp = value;
			}
		}

	}

}
using System;
using System.Collections.Generic;
using System.Text;
using System.IO;



namespace BookingApp.Models
 {
	public class RoomReservations {

		private string endDate;
		private string startDate;
		private Time timestamp;
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

		public Time Timestamp{
			get{
				return timestamp;
			}
			set{
				timestamp = value;
			}
		}

	}

}
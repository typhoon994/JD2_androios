using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.ComponentModel.DataAnnotations;

namespace BookingApp.Models
{
    public class RoomReservations {

        [Key]
        public int Id { get; set; }
        private Nullable<DateTime> endDate;
		private Nullable<DateTime> startDate;
		private Nullable<DateTime> timestamp;
		public User User;
		public Room Room;

		public RoomReservations(){

		}

		~RoomReservations(){

		}

		public Nullable<DateTime> EndDate
        {
			get{
				return endDate;
			}
			set{
				endDate = value;
			}
		}

		public Nullable<DateTime> StartDate
        {
			get{
				return startDate;
			}
			set{
				startDate = value;
			}
		}

		public Nullable<DateTime> Timestamp{
			get{
				return timestamp;
			}
			set{
				timestamp = value;
			}
		}

	}

}
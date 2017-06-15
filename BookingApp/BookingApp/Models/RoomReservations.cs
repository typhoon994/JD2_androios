using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.ComponentModel.DataAnnotations;
using System.Web.Http.OData;

namespace BookingApp.Models
{
    public class RoomReservations {

        public int Id { get; set; }
        private Nullable<DateTime> endDate;
		private Nullable<DateTime> startDate;
		private Nullable<DateTime> timestamp; 


		public RoomReservations(){

		}

		~RoomReservations(){

		}
        [Required]
        public Room Room { get; set; }

        [Required]
        public AppUser AppUser { get; set; }

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
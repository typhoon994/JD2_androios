using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookingApp.Models
{
    public class Accommodation {

        public int Id { get; set; }
        private string address;
		private bool approved;
		private float averageGrade;
		private string description;
        private string imageURL;
		private double latitude;
		private double longitude;
		private string name;

        [Required]
        public Place place { get; set; }

        [Required]
        public AppUser owner { get; set; }
        public Accommodation(){

		}

		~Accommodation(){

		}

		public string Address{
			get{
				return address;
			}
			set{
				address = value;
			}
		}

		public bool Approved{
			get{
				return approved;
			}
			set{
				approved = value;
			}
		}

		public float AverageGrade{
			get{
				return averageGrade;
			}
			set{
				averageGrade = value;
			}
		}

		public string Description{
			get{
				return description;
			}
			set{
				description = value;
			}
		}


		public string ImageURL{
			get{
				return imageURL;
			}
			set{
				imageURL = value;
			}
		}

		public double Latitude{
			get{
				return latitude;
			}
			set{
				latitude = value;
			}
		}

		public double Longitude{
			get{
				return longitude;
			}
			set{
				longitude = value;
			}
		}

		public string Name{
			get{
				return name;
			}
			set{
				name = value;
			}
		}

	}

}
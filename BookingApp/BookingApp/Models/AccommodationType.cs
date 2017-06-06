using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookingApp.Models
{
    public class AccommodationType {

        public int Id { get; set; }
        private string name;
        public List<Accommodation> m_Accommodation { get; set; }

		public AccommodationType(){

		}

		~AccommodationType(){

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
using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookingApp.Models
{
    public class Region {
 
        public int Id { get; set; }
        private string name;

        [Required]
        public Country country { get; set; }
        public List<Place> m_Place { get; set; }


        public Region(){

		}

		~Region(){

		}


		public String Name{
			get{
				return name;
			}
			set{
				name = value;
			}
		}

	}

}
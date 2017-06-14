using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookingApp.Models
{
    public class Place {

        public int Id { get; set; }
        private string name;

        [Required]
        public Region region { get; set; }

		public Place(){

		}

		~Place(){

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
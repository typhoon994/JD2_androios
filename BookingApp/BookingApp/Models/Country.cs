using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookingApp.Models
{
    public class Country {

		private int code;
        public int Id { get; set; }
        private string name;
        public List<Region> m_Region { get; set; }

		public Country(){

		}

		~Country(){

		}

		public int Code{
			get{
				return code;
			}
			set{
				code = value;
			}
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
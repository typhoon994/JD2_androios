using System;
using System.Collections.Generic;
using System.Text;
using System.IO;



namespace BookingApp.Models
 {
	public class Place {

		private int id;
		private string name;
		public List<Accommodation> m_Accommodation;

		public Place(){

		}

		~Place(){

		}

		public int Id{
			get{
				return id;
			}
			set{
				id = value;
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
using System;
using System.Collections.Generic;
using System.Text;
using System.IO;


namespace BookingApp.Models
 {
	public class Comment {

		private int grade;
		private string text;
		public List<User> m_User;
		public List<Accommodation> m_Accommodation;

		public Comment(){

		}

		~Comment(){

		}

		public int Grade{
			get{
				return Grade;
			}
			set{
				Grade = value;
			}
		}

		public string Text{
			get{
				return Text;
			}
			set{
				Text = value;
			}
		}

	}

}
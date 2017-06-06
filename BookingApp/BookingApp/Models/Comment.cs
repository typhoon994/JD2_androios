using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.ComponentModel.DataAnnotations;

namespace BookingApp.Models
{
    public class Comment {

        [Key]
        public int Id { get; set; }
		private int grade;
		private string text;
		public User User;
		public Accommodation Accommodation;

		public Comment(){

		}

		~Comment(){

		}

		public int Grade{
			get{
				return grade;
			}
			set{
				grade = value;
			}
		}

		public string Text{
			get{
				return text;
			}
			set{
				text = value;
			}
		}

	}

}
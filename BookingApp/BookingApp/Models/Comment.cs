using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookingApp.Models
{
    public class Comment {

        public int Id { get; set; }
        private int grade;
        private string text;
        [Required]
        public Accommodation accomodation { get; set; }
        [Required]
        public AppUser user { get; set; }
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
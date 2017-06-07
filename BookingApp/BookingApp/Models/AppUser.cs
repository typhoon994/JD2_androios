﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class AppUser
    {
        private string email;
        public int Id { get; set; }
        private string password;
        private string username;

        public List<Comment> m_Comment { get; set; }

        public List<RoomReservations> m_RoomReservations { get; set; }

        public List<Accommodation> m_Accommodation { get; set; }

        public AppUser()
        {

        }

        ~AppUser()
        {

        }

        public string Email
        {
            get
            {
                return email;
            }
            set
            {
                email = value;
            }
        }


        public string Password
        {
            get
            {
                return password;
            }
            set
            {
                password = value;
            }
        }

        public string Username
        {
            get
            {
                return username;
            }
            set
            {
                username = value;
            }
        }

    }

}
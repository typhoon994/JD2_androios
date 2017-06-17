using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using BookingApp.Models;

namespace BookingApp.Controllers
{
    public class ManagersController : ApiController
    {
        private BAContext db = new BAContext();

        // GET: api/Managers
        [Authorize]
        public IQueryable<AppUser> GetManagers()
        {
            var role = db.Roles.SingleOrDefault(m => m.Name == "Manager");
            var usersInRole = db.Users.Where(m => m.Roles.Any(r => r.RoleId == role.Id));

            List<int> ids = new List<int>();
            List<AppUser> users = new List<AppUser>();

            foreach (BAIdentityUser u in usersInRole)
            {
                // users.Add(db.AppUsers.Where(c => c.Username == u.Id).Single());
                ids.Add(u.appUserId);
            }

            users = db.AppUsers.ToList();

            List<AppUser> ret = new List<AppUser>();

            foreach (int id in ids)
            {
                foreach (AppUser u in users)
                {
                    if (u.Id == id)
                    {
                        ret.Add(u);
                    }
                }
            }


            return ret.AsQueryable();

        }

    }
}
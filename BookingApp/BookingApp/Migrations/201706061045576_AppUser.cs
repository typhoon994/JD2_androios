namespace BookingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AppUser : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AppUsers", "Email", c => c.String());
            AddColumn("dbo.AppUsers", "Password", c => c.String());
            AddColumn("dbo.AppUsers", "Username", c => c.String());
            AddForeignKey("dbo.Accommodations", "Id", "dbo.AppUsers", "Id");
            AddForeignKey("dbo.Comments", "Id", "dbo.AppUsers", "Id");
            AddForeignKey("dbo.RoomReservations", "Id", "dbo.AppUsers", "Id");
            DropColumn("dbo.AppUsers", "FullName");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AppUsers", "FullName", c => c.Int(nullable: false));
            DropForeignKey("dbo.RoomReservations", "Id", "dbo.AppUsers");
            DropForeignKey("dbo.Comments", "Id", "dbo.AppUsers");
            DropForeignKey("dbo.Accommodations", "Id", "dbo.AppUsers");
            DropColumn("dbo.AppUsers", "Username");
            DropColumn("dbo.AppUsers", "Password");
            DropColumn("dbo.AppUsers", "Email");
        }
    }
}

namespace BookingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ModelChanges : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.RoomReservations", "AppUser_Id", "dbo.AppUsers");
            DropForeignKey("dbo.RoomReservations", "Room_Id", "dbo.Rooms");
            DropForeignKey("dbo.Accommodations", "AccommodationType_Id", "dbo.AccommodationTypes");
            DropIndex("dbo.Accommodations", new[] { "AccommodationType_Id" });
            DropIndex("dbo.RoomReservations", new[] { "AppUser_Id" });
            DropIndex("dbo.RoomReservations", new[] { "Room_Id" });
            DropColumn("dbo.Accommodations", "AccommodationType_Id");
            DropColumn("dbo.RoomReservations", "AppUser_Id");
            DropColumn("dbo.RoomReservations", "Room_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.RoomReservations", "Room_Id", c => c.Int());
            AddColumn("dbo.RoomReservations", "AppUser_Id", c => c.Int());
            AddColumn("dbo.Accommodations", "AccommodationType_Id", c => c.Int());
            CreateIndex("dbo.RoomReservations", "Room_Id");
            CreateIndex("dbo.RoomReservations", "AppUser_Id");
            CreateIndex("dbo.Accommodations", "AccommodationType_Id");
            AddForeignKey("dbo.Accommodations", "AccommodationType_Id", "dbo.AccommodationTypes", "Id");
            AddForeignKey("dbo.RoomReservations", "Room_Id", "dbo.Rooms", "Id");
            AddForeignKey("dbo.RoomReservations", "AppUser_Id", "dbo.AppUsers", "Id");
        }
    }
}

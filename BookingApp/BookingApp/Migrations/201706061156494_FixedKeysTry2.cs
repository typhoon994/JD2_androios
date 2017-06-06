namespace BookingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FixedKeysTry2 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.RoomReservations", "Id", "dbo.Rooms");
            DropForeignKey("dbo.Accommodations", "Id", "dbo.AccommodationTypes");
            DropForeignKey("dbo.RoomReservations", "Id", "dbo.AppUsers");
            DropIndex("dbo.RoomReservations", new[] { "Id" });
            DropPrimaryKey("dbo.RoomReservations");
            AddColumn("dbo.Accommodations", "AccommodationType_Id", c => c.Int());
            AddColumn("dbo.RoomReservations", "AppUser_Id", c => c.Int());
            AddColumn("dbo.RoomReservations", "Room_Id", c => c.Int());
            AlterColumn("dbo.RoomReservations", "Id", c => c.Int(nullable: false, identity: true));
            AddPrimaryKey("dbo.RoomReservations", "Id");
            CreateIndex("dbo.Accommodations", "AccommodationType_Id");
            CreateIndex("dbo.RoomReservations", "AppUser_Id");
            CreateIndex("dbo.RoomReservations", "Room_Id");
            AddForeignKey("dbo.RoomReservations", "Room_Id", "dbo.Rooms", "Id");
            AddForeignKey("dbo.Accommodations", "AccommodationType_Id", "dbo.AccommodationTypes", "Id");
            AddForeignKey("dbo.RoomReservations", "AppUser_Id", "dbo.AppUsers", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.RoomReservations", "AppUser_Id", "dbo.AppUsers");
            DropForeignKey("dbo.Accommodations", "AccommodationType_Id", "dbo.AccommodationTypes");
            DropForeignKey("dbo.RoomReservations", "Room_Id", "dbo.Rooms");
            DropIndex("dbo.RoomReservations", new[] { "Room_Id" });
            DropIndex("dbo.RoomReservations", new[] { "AppUser_Id" });
            DropIndex("dbo.Accommodations", new[] { "AccommodationType_Id" });
            DropPrimaryKey("dbo.RoomReservations");
            AlterColumn("dbo.RoomReservations", "Id", c => c.Int(nullable: false));
            DropColumn("dbo.RoomReservations", "Room_Id");
            DropColumn("dbo.RoomReservations", "AppUser_Id");
            DropColumn("dbo.Accommodations", "AccommodationType_Id");
            AddPrimaryKey("dbo.RoomReservations", "Id");
            CreateIndex("dbo.RoomReservations", "Id");
            AddForeignKey("dbo.RoomReservations", "Id", "dbo.AppUsers", "Id");
            AddForeignKey("dbo.Accommodations", "Id", "dbo.AccommodationTypes", "Id");
            AddForeignKey("dbo.RoomReservations", "Id", "dbo.Rooms", "Id");
        }
    }
}

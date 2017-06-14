namespace BookingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updatedReservation2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.RoomReservations", "Room_Id", c => c.Int(nullable: false));
            CreateIndex("dbo.RoomReservations", "Room_Id");
            AddForeignKey("dbo.RoomReservations", "Room_Id", "dbo.Rooms", "Id", cascadeDelete: false);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.RoomReservations", "Room_Id", "dbo.Rooms");
            DropIndex("dbo.RoomReservations", new[] { "Room_Id" });
            DropColumn("dbo.RoomReservations", "Room_Id");
        }
    }
}

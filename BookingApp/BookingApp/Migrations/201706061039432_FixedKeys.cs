namespace BookingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FixedKeys : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.Accommodations");
            DropPrimaryKey("dbo.Comments");
            DropPrimaryKey("dbo.Places");
            DropPrimaryKey("dbo.Regions");
            DropPrimaryKey("dbo.RoomReservations");
            DropPrimaryKey("dbo.Rooms");
            AlterColumn("dbo.Accommodations", "Id", c => c.Int(nullable: false));
            AlterColumn("dbo.Comments", "Id", c => c.Int(nullable: false));
            AlterColumn("dbo.Places", "Id", c => c.Int(nullable: false));
            AlterColumn("dbo.Regions", "Id", c => c.Int(nullable: false));
            AlterColumn("dbo.RoomReservations", "Id", c => c.Int(nullable: false));
            AlterColumn("dbo.Rooms", "Id", c => c.Int(nullable: false));
            AddPrimaryKey("dbo.Accommodations", "Id");
            AddPrimaryKey("dbo.Comments", "Id");
            AddPrimaryKey("dbo.Places", "Id");
            AddPrimaryKey("dbo.Regions", "Id");
            AddPrimaryKey("dbo.RoomReservations", "Id");
            AddPrimaryKey("dbo.Rooms", "Id");
            CreateIndex("dbo.Accommodations", "Id");
            CreateIndex("dbo.Comments", "Id");
            CreateIndex("dbo.Rooms", "Id");
            CreateIndex("dbo.RoomReservations", "Id");
            CreateIndex("dbo.Places", "Id");
            CreateIndex("dbo.Regions", "Id");
            AddForeignKey("dbo.Comments", "Id", "dbo.Accommodations", "Id");
            AddForeignKey("dbo.RoomReservations", "Id", "dbo.Rooms", "Id");
            AddForeignKey("dbo.Rooms", "Id", "dbo.Accommodations", "Id");
            AddForeignKey("dbo.Accommodations", "Id", "dbo.Places", "Id");
            AddForeignKey("dbo.Accommodations", "Id", "dbo.AccommodationTypes", "Id");
            AddForeignKey("dbo.Places", "Id", "dbo.Regions", "Id");
            AddForeignKey("dbo.Regions", "Id", "dbo.Countries", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Regions", "Id", "dbo.Countries");
            DropForeignKey("dbo.Places", "Id", "dbo.Regions");
            DropForeignKey("dbo.Accommodations", "Id", "dbo.AccommodationTypes");
            DropForeignKey("dbo.Accommodations", "Id", "dbo.Places");
            DropForeignKey("dbo.Rooms", "Id", "dbo.Accommodations");
            DropForeignKey("dbo.RoomReservations", "Id", "dbo.Rooms");
            DropForeignKey("dbo.Comments", "Id", "dbo.Accommodations");
            DropIndex("dbo.Regions", new[] { "Id" });
            DropIndex("dbo.Places", new[] { "Id" });
            DropIndex("dbo.RoomReservations", new[] { "Id" });
            DropIndex("dbo.Rooms", new[] { "Id" });
            DropIndex("dbo.Comments", new[] { "Id" });
            DropIndex("dbo.Accommodations", new[] { "Id" });
            DropPrimaryKey("dbo.Rooms");
            DropPrimaryKey("dbo.RoomReservations");
            DropPrimaryKey("dbo.Regions");
            DropPrimaryKey("dbo.Places");
            DropPrimaryKey("dbo.Comments");
            DropPrimaryKey("dbo.Accommodations");
            AlterColumn("dbo.Rooms", "Id", c => c.Int(nullable: false, identity: true));
            AlterColumn("dbo.RoomReservations", "Id", c => c.Int(nullable: false, identity: true));
            AlterColumn("dbo.Regions", "Id", c => c.Int(nullable: false, identity: true));
            AlterColumn("dbo.Places", "Id", c => c.Int(nullable: false, identity: true));
            AlterColumn("dbo.Comments", "Id", c => c.Int(nullable: false, identity: true));
            AlterColumn("dbo.Accommodations", "Id", c => c.Int(nullable: false, identity: true));
            AddPrimaryKey("dbo.Rooms", "Id");
            AddPrimaryKey("dbo.RoomReservations", "Id");
            AddPrimaryKey("dbo.Regions", "Id");
            AddPrimaryKey("dbo.Places", "Id");
            AddPrimaryKey("dbo.Comments", "Id");
            AddPrimaryKey("dbo.Accommodations", "Id");
        }
    }
}

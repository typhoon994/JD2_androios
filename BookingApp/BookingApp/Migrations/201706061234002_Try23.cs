namespace BookingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Try23 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Comments", "Id", "dbo.Accommodations");
            DropForeignKey("dbo.Rooms", "Id", "dbo.Accommodations");
            DropForeignKey("dbo.Accommodations", "Id", "dbo.AppUsers");
            DropForeignKey("dbo.Accommodations", "Id", "dbo.Places");
            DropForeignKey("dbo.Comments", "Id", "dbo.AppUsers");
            DropForeignKey("dbo.Places", "Id", "dbo.Regions");
            DropForeignKey("dbo.Regions", "Id", "dbo.Countries");
            DropForeignKey("dbo.RoomReservations", "Room_Id", "dbo.Rooms");
            DropIndex("dbo.Accommodations", new[] { "Id" });
            DropIndex("dbo.Comments", new[] { "Id" });
            DropIndex("dbo.Rooms", new[] { "Id" });
            DropIndex("dbo.Places", new[] { "Id" });
            DropIndex("dbo.Regions", new[] { "Id" });
            DropPrimaryKey("dbo.Accommodations");
            DropPrimaryKey("dbo.Comments");
            DropPrimaryKey("dbo.Rooms");
            DropPrimaryKey("dbo.Places");
            DropPrimaryKey("dbo.Regions");
            AddColumn("dbo.Accommodations", "accomodation_Id", c => c.Int(nullable: false));
            AddColumn("dbo.Accommodations", "owner_Id", c => c.Int(nullable: false));
            AddColumn("dbo.Accommodations", "place_Id", c => c.Int(nullable: false));
            AddColumn("dbo.Comments", "accomodation_Id", c => c.Int(nullable: false));
            AddColumn("dbo.Comments", "user_Id", c => c.Int(nullable: false));
            AddColumn("dbo.Rooms", "accomodation_Id", c => c.Int(nullable: false));
            AddColumn("dbo.Places", "region_Id", c => c.Int(nullable: false));
            AddColumn("dbo.Regions", "country_Id", c => c.Int(nullable: false));
            AlterColumn("dbo.Accommodations", "Id", c => c.Int(nullable: false, identity: true));
            AlterColumn("dbo.Comments", "Id", c => c.Int(nullable: false, identity: true));
            AlterColumn("dbo.Rooms", "Id", c => c.Int(nullable: false, identity: true));
            AlterColumn("dbo.Places", "Id", c => c.Int(nullable: false, identity: true));
            AlterColumn("dbo.Regions", "Id", c => c.Int(nullable: false, identity: true));
            AddPrimaryKey("dbo.Accommodations", "Id");
            AddPrimaryKey("dbo.Comments", "Id");
            AddPrimaryKey("dbo.Rooms", "Id");
            AddPrimaryKey("dbo.Places", "Id");
            AddPrimaryKey("dbo.Regions", "Id");
            CreateIndex("dbo.Accommodations", "accomodation_Id");
            CreateIndex("dbo.Accommodations", "owner_Id");
            CreateIndex("dbo.Accommodations", "place_Id");
            CreateIndex("dbo.Comments", "accomodation_Id");
            CreateIndex("dbo.Comments", "user_Id");
            CreateIndex("dbo.Rooms", "accomodation_Id");
            CreateIndex("dbo.Places", "region_Id");
            CreateIndex("dbo.Regions", "country_Id");
            AddForeignKey("dbo.Accommodations", "accomodation_Id", "dbo.Accommodations", "Id");
            AddForeignKey("dbo.Comments", "accomodation_Id", "dbo.Accommodations", "Id", cascadeDelete: false);
            AddForeignKey("dbo.Rooms", "accomodation_Id", "dbo.Accommodations", "Id", cascadeDelete: false);
            AddForeignKey("dbo.Accommodations", "owner_Id", "dbo.AppUsers", "Id", cascadeDelete: false);
            AddForeignKey("dbo.Accommodations", "place_Id", "dbo.Places", "Id", cascadeDelete: false);
            AddForeignKey("dbo.Comments", "user_Id", "dbo.AppUsers", "Id", cascadeDelete: false);
            AddForeignKey("dbo.Places", "region_Id", "dbo.Regions", "Id", cascadeDelete: false);
            AddForeignKey("dbo.Regions", "country_Id", "dbo.Countries", "Id", cascadeDelete: false);
            AddForeignKey("dbo.RoomReservations", "Room_Id", "dbo.Rooms", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.RoomReservations", "Room_Id", "dbo.Rooms");
            DropForeignKey("dbo.Regions", "country_Id", "dbo.Countries");
            DropForeignKey("dbo.Places", "region_Id", "dbo.Regions");
            DropForeignKey("dbo.Comments", "user_Id", "dbo.AppUsers");
            DropForeignKey("dbo.Accommodations", "place_Id", "dbo.Places");
            DropForeignKey("dbo.Accommodations", "owner_Id", "dbo.AppUsers");
            DropForeignKey("dbo.Rooms", "accomodation_Id", "dbo.Accommodations");
            DropForeignKey("dbo.Comments", "accomodation_Id", "dbo.Accommodations");
            DropForeignKey("dbo.Accommodations", "accomodation_Id", "dbo.Accommodations");
            DropIndex("dbo.Regions", new[] { "country_Id" });
            DropIndex("dbo.Places", new[] { "region_Id" });
            DropIndex("dbo.Rooms", new[] { "accomodation_Id" });
            DropIndex("dbo.Comments", new[] { "user_Id" });
            DropIndex("dbo.Comments", new[] { "accomodation_Id" });
            DropIndex("dbo.Accommodations", new[] { "place_Id" });
            DropIndex("dbo.Accommodations", new[] { "owner_Id" });
            DropIndex("dbo.Accommodations", new[] { "accomodation_Id" });
            DropPrimaryKey("dbo.Regions");
            DropPrimaryKey("dbo.Places");
            DropPrimaryKey("dbo.Rooms");
            DropPrimaryKey("dbo.Comments");
            DropPrimaryKey("dbo.Accommodations");
            AlterColumn("dbo.Regions", "Id", c => c.Int(nullable: false));
            AlterColumn("dbo.Places", "Id", c => c.Int(nullable: false));
            AlterColumn("dbo.Rooms", "Id", c => c.Int(nullable: false));
            AlterColumn("dbo.Comments", "Id", c => c.Int(nullable: false));
            AlterColumn("dbo.Accommodations", "Id", c => c.Int(nullable: false));
            DropColumn("dbo.Regions", "country_Id");
            DropColumn("dbo.Places", "region_Id");
            DropColumn("dbo.Rooms", "accomodation_Id");
            DropColumn("dbo.Comments", "user_Id");
            DropColumn("dbo.Comments", "accomodation_Id");
            DropColumn("dbo.Accommodations", "place_Id");
            DropColumn("dbo.Accommodations", "owner_Id");
            DropColumn("dbo.Accommodations", "accomodation_Id");
            AddPrimaryKey("dbo.Regions", "Id");
            AddPrimaryKey("dbo.Places", "Id");
            AddPrimaryKey("dbo.Rooms", "Id");
            AddPrimaryKey("dbo.Comments", "Id");
            AddPrimaryKey("dbo.Accommodations", "Id");
            CreateIndex("dbo.Regions", "Id");
            CreateIndex("dbo.Places", "Id");
            CreateIndex("dbo.Rooms", "Id");
            CreateIndex("dbo.Comments", "Id");
            CreateIndex("dbo.Accommodations", "Id");
            AddForeignKey("dbo.RoomReservations", "Room_Id", "dbo.Rooms", "Id");
            AddForeignKey("dbo.Regions", "Id", "dbo.Countries", "Id");
            AddForeignKey("dbo.Places", "Id", "dbo.Regions", "Id");
            AddForeignKey("dbo.Comments", "Id", "dbo.AppUsers", "Id");
            AddForeignKey("dbo.Accommodations", "Id", "dbo.Places", "Id");
            AddForeignKey("dbo.Accommodations", "Id", "dbo.AppUsers", "Id");
            AddForeignKey("dbo.Rooms", "Id", "dbo.Accommodations", "Id");
            AddForeignKey("dbo.Comments", "Id", "dbo.Accommodations", "Id");
        }
    }
}

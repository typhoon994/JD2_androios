namespace BookingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class usermodelfix : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AppUsers", "Approved", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.AppUsers", "Approved");
        }
    }
}

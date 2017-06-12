/**
 * Provides a `Accommondation` object
 */
export class Accommondation {

    public Id: number;
    public Name: string;
    public Description: string;
    public Address: string;
    public AverageGrade: string;
    public Latitude: number;
    public Longitude: number;
    public ImageUrl: string;
    public Approved: boolean = false;
    public Owner_Id: number = 1;
    public Place_Id: number = 1;
    public Accomodation_Type: number = 1;
    
}

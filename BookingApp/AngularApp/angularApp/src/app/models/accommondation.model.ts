/**
 * Provides a `Accommondation` object
 */

import { User } from '../models/user.model';
import { Place } from '../models/place.model';
import { Comment } from '../models/comment.model';
import { Room } from '../models/room.model';

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
    public Owner: User;
    public Place: Place;
    public Accomodation_Type: number = 1;
    public m_Comments: Array<Comment>;
    public m_Rooms: Array<Room>;


    
}

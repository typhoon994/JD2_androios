/**
 * Provides a `RoomReservation` object
 */
import { Room} from '../models/room.model';
export class RoomReservation {

      public Id: number;

  constructor(

    public EndDate: Date = new Date("1.1.1999"),
    public StartDate: Date = new Date("1.1.1999"),
    public TimeStamp: Date = new Date("1.1.1999"),
    public Room: Room
    
   ) {
  }
}

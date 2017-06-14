/**
 * Provides a `RoomReservation` object
 */
import { Room} from '../models/room.model';
export class RoomReservation {

      public id: number;

  constructor(

    public endDate: Date = new Date("1.1.1999"),
    public startDate: Date = new Date("1.1.1999"),
    public timeStamp: Date = new Date("1.1.1999"),
    public room: Room
    
   ) {
  }
}

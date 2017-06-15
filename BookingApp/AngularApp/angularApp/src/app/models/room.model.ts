/**
 * Provides a `Room` object
 */

import { RoomReservation } from '../models/roomReservation.model';
import { Accommondation } from '../models/accommondation.model';


export class Room {
  constructor(

    public Id: number,
    public RoomNumber: number,
    public Description: string,
    public BedCount: number,
    public PricePerNight:number,
    public accomodation: Accommondation,
    
   ) {
  }
}

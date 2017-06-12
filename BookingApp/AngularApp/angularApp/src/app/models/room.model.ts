/**
 * Provides a `Room` object
 */
export class Room {
  constructor(
    public id: number,
    public roomNumber: number,
    public description: string,
    public bedCount: number,
    public pricePerNight:number
   ) {
  }
}

/**
 * Provides a `Accommondation` object
 */
export class Accommondation {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public address: string,
    public averageGrade: string,
    public latitude: number,
    public longitude: number,
    public imageUrl: string,
    public approved: boolean,
   ) {
  }
}

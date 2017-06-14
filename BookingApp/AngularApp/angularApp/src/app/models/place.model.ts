/**
 * Provides a `Place` object
 */


import { Region } from '../models/region.model';
import { Accommondation } from '../models/accommondation.model';


export class Place {
  constructor(
    public Id: number,
    public Name: string,

    public Region: Region,
   ) {
  }
}

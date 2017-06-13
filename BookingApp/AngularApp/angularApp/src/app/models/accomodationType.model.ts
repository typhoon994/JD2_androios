/**
 * Provides a `AccomodationType` object
 */

import { Accommondation } from '../models/accommondation.model';


export class AccomodationType {
  constructor(
    public Id: number,
    public Name: string,
    public m_Accomodation: Array<Accommondation>
   ) {
  }
}

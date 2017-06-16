/**
 * Provides a `Comment` object
 */


import { User } from '../models/user.model';
import { Accommondation } from '../models/accommondation.model';



export class Comment {
  constructor(
    public Id: number,
    public Grade: number,
    public Text: string,
    public User: User,
    public accomodation: Accommondation
   ) {
  }
}

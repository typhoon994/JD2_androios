/**
 * Provides a `User` object
 */

import { RoomReservation } from '../models/roomReservation.model';
import { Comment } from '../models/comment.model';
import { Accommondation } from '../models/accommondation.model';

export class User {

  constructor(
    public Id: number,
    public Username: string,
    public Email: string,
    public Password: string,
    public m_Comment: Array<Comment>,
    public m_RoomReservations: Array<Comment>,
    public m_Accomondation: Array<Accommondation>,
    public Approved: boolean
   ) {
  }
}

/**
 * Provides a `Comment` object
 */
export class Comment {
  constructor(
    public id: number,
    public grade: number,
    private text: string
   ) {
  }
}

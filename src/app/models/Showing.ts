export class Showing{
  constructor(
  public id :number,
  public date :string,
  public movieId :number,
  public movieTitle :string,
  public roomId :number,
  public availableSeats :number,
  public seatsTaken :string[])
  {}
}

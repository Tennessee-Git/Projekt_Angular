export class Showing{
  private id :number;
  private date :string;
  private movieId :number;
  private movieTitle :string;
  private roomId :number;
  private availableSeats :number;
  private seatsTaken :string[];

  constructor()
    {
      this.id = -1;
      this.date = "";
      this.movieId = -1;
      this.movieTitle = "";
      this.roomId = -1;
      this.availableSeats = -1;
      this.seatsTaken = [];
    }

    public get Id():number
    {
      console.log("test2");
      return this.id;
    }

    public get Date():string
    {
      return this.date;
    }

    get MovieId():number
    {
      return this.movieId;
    }

    get MovieTitle():string
    {
      return this.movieTitle;
    }

    get RoomId():number
    {
      return this.roomId;
    }

    get AvailableSeats():number
    {
      return this.availableSeats;
    }

    get SeatsTaken():string[]
    {
      return this.seatsTaken;
    }

    set Id(val: number)
    {
      this.id = val;
    }

    set Date(val: string)
    {
      this.date = val;
    }
}

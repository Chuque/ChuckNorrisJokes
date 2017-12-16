export class Joke {
  id: number;
  text: String;

  constructor(){}
}

export class JokeDto{
  id:number;
  text:String;

  constructor(jsonJoke: any){
    this.id = jsonJoke.value.id;
    this.text = jsonJoke.value.joke;
  }

  getJoke():Joke{
    let joke:Joke = new Joke();

    joke.id = this.id;
    joke.text = this.text;

    return joke;
  }
}

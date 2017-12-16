import { Component, OnInit } from '@angular/core';
import {Joke} from './joke.model';
import {JokeService} from './joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  joke: Joke;

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.refreshJoke();
  }

  refreshJoke(){
    this.jokeService.getJoke()
      .subscribe(joke => {this.joke = joke}
      );
  }

}

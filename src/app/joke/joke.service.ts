import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Joke, JokeDto} from './joke.model';
import "rxjs/add/observable/interval";

@Injectable()
export class JokeService {

  constructor(private http: Http) { }

  getJoke(): Observable<Joke> {
    return this.http.get('http://api.icndb.com/jokes/random')
      .map(response => new JokeDto(response.json()).getJoke());
  }

}

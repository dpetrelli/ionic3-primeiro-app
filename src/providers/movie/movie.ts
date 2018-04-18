import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseAPIPath = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  obterFilmes() {
    return this.http.get(this.baseAPIPath + "/movie/popular?api_key=6fcb1646381fa6537b6ee2bced8eea93");
  }
}

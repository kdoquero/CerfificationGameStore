import { Injectable } from '@angular/core';
import { Game } from '../entities/game';
import { HttpClient, HttpParams, HttpHeaders, HttpClientJsonpModule } from '@angular/common/http';
import { tap, map } from "rxjs/operators";
import { GiantBomb } from '../entities/giant-bomb';
import { GiantBombGames } from '../entities/giant-bomb-games';


@Injectable({
  providedIn: 'root',
})
export class GiantBombApiService {
  games: Game[];
  private url: string;
  private apiKey: string;
  private format: string;
  private filterRelease: string;
  private httpOptions: Object;
  private platforms: string;

  private year: string;




  httpParams = {

  }
  constructor(private http: HttpClient, private jsonp: HttpClientJsonpModule) {
    this.url = "https://www.giantbomb.com/api/";
    this.apiKey = "393b6596b4dc77b7c17ae66bd42cefe0b52c106f"
    this.format = "jsonp"
    this.year = "2018"
    this.filterRelease = "field:2018-01-01|2018-31-12&sort=original_release_date:desc"

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Headers": "x-requested-with, authorization, Content-Type, Authorization, credential, X-XSRF-TOKEN",
        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
      }),
      params: new HttpParams()
        .set("api_key", this.apiKey)
        .set('format', this.format)

    };
  }


  getAll() {
    let games = localStorage.getItem('games');
    if (games) {
      return games
    } else {
      return this.http.jsonp(`${this.url}games/?api_key=${this.apiKey}&format=jsonp`, "json_callback").pipe(
        tap(value => {
          localStorage.setItem('games', JSON.stringify(value))
          console.log(value)
        })
      )
    }

  }

  getById(id:Number) {
    return this.http.jsonp<GiantBomb>(`${this.url}game/${id}/?api_key=${this.apiKey}&format=jsonp`,"json_callback")
      
  }
  getVideo(id){
    return this.http.jsonp<GiantBomb>(`${this.url}game/${id}/?api_key=${this.apiKey}&format=jsonp`,"json_callback")
  }
  getLastExpectedReleasePerPlatform(platform:number) {

    return this.http.jsonp<GiantBomb>(`${this.url}games/?api_key=${this.apiKey}&platforms=${platform}&filter=${this.filterRelease},platforms:${platform}&sort=original_release_date:desc&format=jsonp`, "json_callback").pipe(
      tap(value => {
        let results:GiantBombGames[];
        results = value.results

        localStorage.setItem('gamesreleased', JSON.stringify(results))
      })
    )

  }
}

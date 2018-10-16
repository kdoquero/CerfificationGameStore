import { Injectable } from '@angular/core';
import { GiantBombApiService } from './giant-bomb-api.service';
import { GiantBombGames } from '../entities/giant-bomb-games';
import { GiantBomb } from '../entities/giant-bomb';

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {
  games:GiantBombGames[];
  lastGames: GiantBombGames[];
  game:GiantBombGames;
  constructor(private giantBombApi: GiantBombApiService) {
    console.log('test');
    
    let gamesReleased = localStorage.getItem('gamesreleased');
    if (gamesReleased) {
      let results:GiantBombGames[] = JSON.parse(gamesReleased)
      this.lastGames = results.slice(Math.max(results.length -5, 1));
      this.games = results;
    } else {

      this.giantBombApi.getLastExpectedReleasePerPlatform(146).subscribe( data => {
          let results:GiantBomb;
          results = data;
          this.lastGames = results.results.slice(Math.max(results.results.length - 5, 1))
          this.games = results.results
          console.log(this.games)



      })
    }
  }

}

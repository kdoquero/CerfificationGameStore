import { Component, OnInit } from '@angular/core';
import { GiantBombGames } from '../entities/giant-bomb-games';
import { GiantBombApiService } from '../services/giant-bomb-api.service';
import { GiantBomb } from '../entities/giant-bomb';
import { GamesDataService } from '../services/games-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  games:GiantBombGames[] = [];
  constructor(private giantBombApi: GiantBombApiService,private gamesData:GamesDataService) { }

  ngOnInit() {
    this.games = this.gamesData.games
    
  }

}

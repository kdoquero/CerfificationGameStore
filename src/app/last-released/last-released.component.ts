import { Component, OnInit,Input } from '@angular/core';
import { GiantBombGames } from '../entities/giant-bomb-games';
import { GiantBomb } from '../entities/giant-bomb';
import { GiantBombApiService } from '../services/giant-bomb-api.service';
import { GamesDataService } from '../services/games-data.service';

@Component({
  selector: 'app-last-released',
  templateUrl: './last-released.component.html',
  styleUrls: ['./last-released.component.scss']
})
export class LastReleasedComponent implements OnInit {
  
  lastReleased:GiantBombGames[];
  constructor(private gamesData:GamesDataService ) { }

  ngOnInit() {
    this.lastReleased = this.gamesData.lastGames;
  }

}

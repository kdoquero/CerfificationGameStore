import { Component, OnInit } from '@angular/core';
import { GamesDataService } from '../services/games-data.service';
import { GiantBombGames } from '../entities/giant-bomb-games';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent implements OnInit {
  lastGamesRandom:GiantBombGames[];
  constructor(private GamesData:GamesDataService) { }

  ngOnInit() {
    this.lastGamesRandom = this.shuffle(this.GamesData.games); 
    this.lastGamesRandom = this.lastGamesRandom.slice(Math.max(this.GamesData.games.length - 3, 1));
  }
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GiantBombGames } from '../entities/giant-bomb-games';
import { GamesDataService } from '../services/games-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() game:GiantBombGames;
  id: string;
  name: string;
  constructor(private router:Router,private DataService:GamesDataService) { 
    

  }

  ngOnInit() {
  }
  goToDetails(){
    this.router.navigate(['details',this.game.id,this.game.name]);
    this.DataService.game = this.game;
  }

ngOnDestroy() {
    
 }
}

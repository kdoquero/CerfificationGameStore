import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GiantBombGames } from '../entities/giant-bomb-games';
import { GamesDataService } from '../services/games-data.service';
import { CartDataService } from '../services/cart-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() game:GiantBombGames;
  id: string;
  name: string;
  price:number;
  constructor(private router:Router,private DataService:GamesDataService,private CartService:CartDataService) { 
    this.price = this.CartService.getRandomInt(2500,8000) /100;
    
  }
  add(){
    this.game.price = this.price;
    
    this.CartService.addProduct(this.game,this.price);

  }
  ngOnInit() {
  }
  ngAfterViewInit(){
    this.game.qty = 0;
  }
  goToDetails(){
    this.router.navigate(['details',this.game.id,this.game.name]);
    this.DataService.game = this.game;
    this.DataService.price = this.price;
  }
ngOnDestroy() {
    
 }
}

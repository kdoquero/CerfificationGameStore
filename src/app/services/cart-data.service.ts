import { Injectable } from '@angular/core';
import { Game } from '../entities/game';
import { GiantBombGames } from '../entities/giant-bomb-games';
import { GamesDataService } from './games-data.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  games:GiantBombGames[];
  cartItems:GiantBombGames[] = [];
  totalItems:number = 0;
  total:number = 0;
  isTotalItem:BehaviorSubject<number> = new BehaviorSubject(0);
  isTotalPrice:BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private GameData:GamesDataService) { 
    this.games = this.GameData.games
  }

  add(game:GiantBombGames){
      this.cartItems.push(game); 
    console.log("qty:", this.totalItems,"total:", this.total ,"items:",this.cartItems);
  }
  totalPrice(){
    this.total += this.getRandomInt(2500,8000);

  }
  getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
upTotalItems(item:number){
  this.isTotalItem.next(item)
}
uptotalPrice(price){
  this.isTotalPrice.next(price)
}
addProduct(game,price){
  this.add(game);
  this.total += price;
  this.totalItems++;
  this.uptotalPrice(this.total)
  this.upTotalItems(this.totalItems)
}
}

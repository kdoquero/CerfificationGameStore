import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../services/cart-data.service';
import { GiantBombGames } from '../entities/giant-bomb-games';
import { GameStoreApiService } from '../services/game-store-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  games: GiantBombGames[];
  total:number;
  constructor(private CartService: CartDataService,private gameStoreService:GameStoreApiService) { }
 
  ngOnInit() {

    const count = idGame =>
      this.CartService.cartItems.reduce((a, b) =>
        Object.assign(a, { [b.id]: (a[b.id] || 0) + 1 }), {})

    const duplicates = dict =>
      Object.keys(dict).filter((a) => dict[a] > 1)

    let dup = duplicates(count(this.CartService.cartItems));
    this.CartService.cartItems.forEach(item => {
      dup.forEach(dupli => {
        if (parseInt(dupli) === item.id) {

          item.qty++
        } else {
          item.qty = 1;
        }
      })
    })
    console.log(this.CartService.cartItems);
    this.gameStoreService.productList.subscribe(products=>{
      this.CartService.cartItems = products
      let uniqueArray = this.CartService.cartItems.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
      })
      this.games = uniqueArray;
    })
    
   
    this.CartService.isTotalPrice.subscribe(total=>{
      this.total = total
      
    })
  } ngAfter
  addproduct(){
    if (this.gameStoreService.client) {
      console.log(this.games);
      
      this.games.forEach(game=>{
        let newGame:GiantBombGames = {
          idProduct:game.id,
          image:game.image,
          name:game.name,
          price:game.price,
          qty:game.qty,
          deck:game.deck
        }
        this.gameStoreService.addProduct(this.CartService.cart.id,newGame).subscribe(value=>{
          console.log(value);
          
        })
      })
    } else {
      console.log("not connected");
      localStorage.setItem('itemsGameStore',JSON.stringify(this.games))
      
    }
    
    
  }
  deleteGame(id){
    for(var i = 0; i < this.games.length; i++) {
      if(this.games[i].id == id) {
          this.games.splice(i, 1);
          break;
      }
  }
  }

}

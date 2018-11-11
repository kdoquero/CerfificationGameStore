import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../services/cart-data.service';
import { GiantBombGames } from '../entities/giant-bomb-games';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  games: GiantBombGames[];
  total:number;
  constructor(private CartService: CartDataService) { }

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
    let uniqueArray = this.CartService.cartItems.filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    })
    this.games = uniqueArray;
    this.CartService.isTotalPrice.subscribe(total=>{
      this.total = total
      
    })
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

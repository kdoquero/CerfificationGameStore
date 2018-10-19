import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../services/cart-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  totalItems:number= 0;
  total:number =0;
  constructor(private cartService:CartDataService,private Router:Router) { 
    this.cartService.isTotalItem.subscribe(value => {
      this.totalItems = value;
      
      
    })
    this.cartService.isTotalPrice.subscribe(value=> {
      this.total = value;
    })
  }

  ngOnInit() {
  }
  goToCart() {
    this.Router.navigate(["cart"])
  }

}

import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../services/cart-data.service';
import { Router } from '@angular/router';
import { GameStoreApiService } from '../services/game-store-api.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [FormBuilder]
})
export class NavbarComponent implements OnInit {
  totalItems: number = 0;
  total: number = 0;
  formSign: FormGroup;
  isLogged: Boolean = false;
  name: string = "";
  connected: Boolean = false;;

  constructor(private fb: FormBuilder, private cartService: CartDataService, private Router: Router, private gameStoreApi: GameStoreApiService) {
    this.formSign = fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(2)]]
    })
    this.cartService.isTotalItem.subscribe(value => {
      this.totalItems = value;


    })
    this.cartService.isTotalPrice.subscribe(value => {
      this.total = value;
    })
    this.gameStoreApi.isloggedValidator.subscribe(value => {
      this.isLogged = value;


    })
    if (this.gameStoreApi.getTokenLogged()) {
      this.login(this.gameStoreApi.getTokenLogged()['userId'])
    }

  }

  ngOnInit() {
  }
  goToCart() {
    if (this.gameStoreApi.isLogged) {
      this.Router.navigate(["cart", this.gameStoreApi.client.id])
    } else {
      this.Router.navigate(["cart"]);
    }

  }
  login(id) {
    this.gameStoreApi.getCart(id).subscribe(value => {
      this.gameStoreApi.getCartWithProducts(value["id"]).subscribe(cart => {
        this.cartService.cart = cart;
        this.gameStoreApi.client = cart.client;
        this.name = cart.client.name;
        this.gameStoreApi.setLogged(true)
        this.gameStoreApi.isLogged = true;
        this.cartService.cartItems = cart.products;
        this.gameStoreApi.setProducts(cart.products);
        console.log(cart.products);
        


      })
    })
  }
  logOut(){
    this.gameStoreApi.logout().subscribe(value=>{
      this.gameStoreApi.isLogged = false;
      this.gameStoreApi.setLogged(false);
      this.cartService.cartItems = [];
      this.gameStoreApi.setProducts([]);
      this.Router.navigate(['home']);
    })
  }
  onSubmit() {
    this.gameStoreApi.login(this.formSign.value).subscribe(client => {
      if (this.connected === true) {
        this.gameStoreApi.setToken(client);
      } else {
        this.gameStoreApi.setTokenNoRemeber(client)
      }
      
      this.login(client['userId'])
      
    })

  }
  checkOnline(e) {
    if (e.target.checked) {
      this.connected = true;
    } else {
      this.connected = false;
    }
  }
  goToAccount() {
    this.Router.navigate(["account", this.gameStoreApi.client.id])
  }
}

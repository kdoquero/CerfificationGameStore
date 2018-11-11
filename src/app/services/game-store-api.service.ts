import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Client } from '../entities/client';
import { Observable, BehaviorSubject } from 'rxjs';
import { Cart } from '../entities/cart';
import { GiantBombGames } from '../entities/giant-bomb-games';


@Injectable({
  providedIn: 'root'
})
export class GameStoreApiService {
  apiDomain: string = "http://localhost:3000/api/"
  token: string;
  responseLoginData: string;
  cart: Object;
  client:Client;
  isLogged:Boolean=false;
  isloggedValidator:BehaviorSubject<Boolean> = new BehaviorSubject(false);
  productList:BehaviorSubject<GiantBombGames[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  private getToken() {
    return this.token;
  }
  setToken(token) {
  localStorage.setItem('tokenGameStore',JSON.stringify(token));
    this.token = token["id"];
  }
  setProducts(products){
    this.productList.next(products)
  }
  setTokenNoRemeber(token) {
      this.token = token["id"];
    }
  getTokenLogged(){
    let client = JSON.parse(localStorage.getItem("tokenGameStore"));
    if (client) {
      this.token = client['id'];
    }
    
    return client;
  }
  setLogged(value:Boolean){
    this.isloggedValidator.next(value)
  }
  
  newClient(client) {
    return this.http.post<Client>(`${this.apiDomain}clients`, client)
  }
  login(client) {
    return this.http.post(`${this.apiDomain}clients/login`, client);
  }

  updateClient(clientData:Client){
    let id = clientData.id;
    let beforePost = clientData;
    delete beforePost.id;
    return this.http.patch(`${this.apiDomain}clients/${id}?access_token=${this.getToken()}`,beforePost)
    
  }
  logout() {
    this.getToken();
    return this.http.post(`${this.apiDomain}clients/logout?access_token=${this.getToken()}`, this.responseLoginData).pipe(
      tap(value => {
        localStorage.removeItem('tokenGameStore');
        console.log("logout");
        
        this.token = null;
      })
    )
  }
  getCart(clientId) {
    return this.http.get(`${this.apiDomain}clients/${clientId}/shoppingCarts?&access_token=${this.getToken()}`)
  }
  getCartWithProducts(clientId) {

    return this.http.get<Cart>(`${this.apiDomain}shoppingCarts/${clientId}?filter={"include":["products","client"]}&access_token=${this.getToken()}`)


  }
  createCart(clientId) {
    return this.http.get(`${this.apiDomain}clients/${clientId}/shoppingCarts?access_token=${this.getToken()}`)

  }

  addProduct(id,product) {
    return this.http.post(`${this.apiDomain}shoppingCarts/${id}/products?access_token=${this.getToken()}`, product)
  }
  deleteProduct(idCart, idProduct) {
    return this.http.delete(`${this.apiDomain}shoppingCarts/${idCart}/products/${idProduct}?access_token=${this.getToken()}`)
  }
}



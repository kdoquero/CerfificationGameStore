import { Product } from "./product";
import { GiantBombGames } from "./giant-bomb-games";
import { Client } from "./client";

export interface Cart {
    client:Client;
    clientId:number;
    id:number;
    products: GiantBombGames[];
    total:number;
}

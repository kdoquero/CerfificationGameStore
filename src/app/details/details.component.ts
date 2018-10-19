import { Component, OnInit } from '@angular/core';
import { GamesDataService } from '../services/games-data.service';
import { GiantBombGames } from '../entities/giant-bomb-games';
import { Router, ActivatedRoute } from '@angular/router';
import { GiantBombApiService } from '../services/giant-bomb-api.service';
import { CartDataService } from '../services/cart-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  game: GiantBombGames = {
    aliases: "",
    api_detail_url: "",
    date_added: new Date(),
    date_last_updated: new Date(),
    deck: "",
    description: "",
    expected_release_day: "",
    expected_release_month: "",
    expected_release_quarter: "",
    expected_release_year: "",
    guid: "",
    id: 0,
    image: "",
    image_tags: [],
    images: [],
    name: "",
    number_of_user_reviews: 0,
    original_game_rating: "",
    original_release_date: new Date(),
    platforms: [],
    site_details_url: "",
    videos: []
  };
  constructor(private DataService: GamesDataService, private route: ActivatedRoute, private GiantBombApi: GiantBombApiService,private cartService:CartDataService) {


    this.GiantBombApi.getById(this.route.snapshot.params.id).subscribe(game => {
      console.log(game.results);
      this.game = game.results;
      console.log(this.game);
    });

  }

  ngOnInit() {
    console.log(this.cartService.cartItems);
     
  }

}

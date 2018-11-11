export interface GiantBombGames {
  aliases?: string,
  api_detail_url?: string,
  date_added?: Date,
  date_last_updated?: Date,
  deck: string,
  description?: string,
  expected_release_day?: string,
  expected_release_month?: string,
  expected_release_quarter?: string,
  expected_release_year?: string,
  guid?: string,
  id?: number,
  image: Object,
  images?:Array<Object>,
  image_tags?: Array<Object>,
  name: string,
  number_of_user_reviews?: number,
  original_game_rating?: string,
  original_release_date?: Date,
  platforms?: Array<Object>,
  site_details_url?: string,
  videos?: Array<Object>,
  price?:number;
  qty?:number;
  idProduct?:number;
}

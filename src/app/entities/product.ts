export interface Product {
    deck: string;
    id: number;
    image?: Object;
    images?:Array<Object>;
    image_tags?: Array<Object>;
    name: string;
    number_of_user_reviews?: number;
    original_game_rating?: string;
    original_release_date?: Date;
    platforms?: Array<Object>;
    site_details_url?: string;
    videos?: Array<Object>;
    price?:number;
    qty?:number; 
}

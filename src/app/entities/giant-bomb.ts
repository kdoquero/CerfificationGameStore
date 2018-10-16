import { GiantBombGames } from "./giant-bomb-games";


export interface GiantBomb {
  error: string,
  limit: number,
  number_of_page_results: number,
  number_of_total_results: number,
  offset: number,
  results : any,
  status_code : number,
  version : string
}

export interface Game {
    id?: number;
    name: string;
    genre: string;
    released: Date;
    description: string;
    size: number;
    platform: string;
    image: string;
    available: boolean;
}

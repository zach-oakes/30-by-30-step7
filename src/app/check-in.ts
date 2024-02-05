import {BeerType} from "./beer-type";
import {ServingStyle} from "./serving-style";

export interface CheckIn {
    id: string,
    brewery: string,
    beerName: string,
    beerType: BeerType,
    review: string,
    rating: number,
    servingStyle: ServingStyle,
}
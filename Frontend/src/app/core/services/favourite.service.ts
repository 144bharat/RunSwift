import { Injectable } from '@angular/core';
import { Favourite } from '../models/favourite.model';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  private storageKey = 'favourites';

  getFavourites(): Favourite[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  addFavourite(favourite: Favourite): void {
    const favourites = this.getFavourites();
    favourites.push(favourite);
    localStorage.setItem(this.storageKey, JSON.stringify(favourites));
  }

  removeFavourite(productId: number): void {
    const favourites = this.getFavourites();
    const updatedFavourites = favourites.filter(fav => fav.productId !== productId);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedFavourites));
  }

  isFavourite(productId: number): boolean {
    const favourites = this.getFavourites();
    return favourites.some(fav => fav.productId === productId);
  }
}
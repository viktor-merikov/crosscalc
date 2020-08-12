import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from './constants/constants';
import { of } from 'rxjs';

export interface ItemData {
  id: number,
  name: string,
  description: string,
  sellPrice: number,
  buyPrice: number,
  craftable: number,
  rarityName: string,
  categoryId: number,
  categoryName: string,
  typeName: string,
  faction: string,
  factionNumber: number,
  image: string
}

@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  constructor(private _http: HttpClient) {
    setInterval(() => {
      this.currentItems = [];
      this.getAllItems();
    }, 300000);
  }

  private currentItems = [];

  getCurrentItems = () => [...this.currentItems];

  setCurrentItems = (items) => {
    if (this.currentItems.length === 0) {
      this.currentItems = items;
    }
  }

  getAllItems = () => {
    if (this.currentItems.length > 0) return of(this.currentItems);
    return this._http.get(`${SERVER_URL}/items`);
  }

  getFactions = () => this._http.get(`${SERVER_URL}/factions`);

  getRecipeById = (id) => this._http.get(`${SERVER_URL}/recipe/${id}`);

}

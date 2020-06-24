import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Results } from '../interfaces/restaurant';

@Injectable({
  providedIn: 'root'
})
export class FoodSearchService {

  options = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Headers' : 'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version, X-File-Name',
      'Access-Control-Request-Method' : 'GET,POST,OPTIONS'
    })
  };

  lat: string = '';
  lng: string = '';
  minPrice: number;
  maxPrice: number;
  distance: number;
  isChecked: boolean;
  userPreferences: Map<number, string>;

  constructor(
    private http: HttpClient
  ) { }

  reset(){
    this.minPrice = 1;
    this.maxPrice = 4;
    this.distance = 8046.7;
    this.userPreferences = new Map<number, string>();
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getResults(cuisine: string){
    return this.http.get<Results>(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.lat},${this.lng}&radius=${this.distance}&type=restaurant&minprice=${this.minPrice}&maxprice=${this.maxPrice}&keyword=${cuisine}&key=AIzaSyAogGBcYoTwgNYi014nNU7z19z4SipigC8`, this.options);
  }

  // getNextPage(token: string){
  //   return this.http.get<Results>(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken=${token}&key=AIzaSyAogGBcYoTwgNYi014nNU7z19z4SipigC8`);
  // }
}

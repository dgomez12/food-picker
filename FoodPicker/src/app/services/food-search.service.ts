import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Results } from '../interfaces/restaurant';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FoodSearchService {

  lat: number;
  lng: number;
  minPrice: number;
  maxPrice: number;
  distance: number;
  userPreferences: Map<number, string>;
  isChecked: boolean;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  checkDisabled(){
    if(this.userPreferences.size==0){
      window.alert('Please pick an option before continuing');
      return;
    }else {
      this.router.navigate(['/results']);
    }
  }

  reset(){
    this.isChecked = true;
    this.minPrice = 1;
    this.maxPrice = 4;
    this.distance = 8046.7;
    this.userPreferences = new Map<number, string>();
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getResults(cuisine: string){

    let params = new HttpParams().set("location", this.lat + ',' + this.lng).set("radius", this.distance.toString()).set("type", "restaurant").set("minprice", this.minPrice.toString()).set("maxprice", this.maxPrice.toString()).set("keyword", cuisine).set("key", environment.API_KEY);

    return this.http.get<Results>('https://us-central1-restaurantpicker-30cc8.cloudfunctions.net/foodApi', {params: params});
  }
}

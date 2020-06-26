import { Component, OnInit } from '@angular/core';
import { FoodSearchService } from '../../services/food-search.service';
import { Restaurant } from 'src/app/interfaces/restaurant';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  lat: number;
  lng: number;
  zoom: number;
  randomNumber: number = 0;
  restaurantResults: Restaurant[];
  // nextPageResults: Restaurant[];

  constructor(
    private foodService: FoodSearchService,
  ) { }

  ngOnInit(): void {
    this.restaurantResults = [];
    this.lat = this.foodService.lat;
    this.lng = this.foodService.lng;
    this.zoom = 13;
    this.foodService.userPreferences.forEach((value: string) => {
      this.foodService.getResults(value).subscribe((data) => {
        console.log(data);
        data.results.forEach((r) => {
          this.restaurantResults.push(r);
          console.log(r);
        })
        if(this.foodService.isChecked = true){
          this.randomNumber = this.foodService.getRandomInt(this.restaurantResults.length);
         }
      })
    })
  }

}

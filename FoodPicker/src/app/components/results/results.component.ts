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
  randomNumber: number;
  restaurantResults: Restaurant[];
  randomChecker: boolean;
  resultLength: number;
  // nextPageResults: Restaurant[];

  constructor(
    private foodService: FoodSearchService,
  ) { }

  ngOnInit(): void {
    this.restaurantResults = [];
    this.lat = this.foodService.lat;
    this.lng = this.foodService.lng;
    this.zoom = 13;
    this.randomChecker = this.foodService.isChecked;
    this.handleResults();
  }
  
  handleResults(){
    this.foodService.userPreferences.forEach((value: string) => {
      this.foodService.getResults(value).subscribe((data) => {
        data.results.forEach((r) => {
          this.restaurantResults.push(r);
        })
        this.randomNumber = this.foodService.getRandomInt(this.restaurantResults.length);
      })
    })
  }

  reroll(){
    this.randomNumber = this.foodService.getRandomInt(this.restaurantResults.length);
  }

}

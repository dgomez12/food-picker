import { Component, OnInit } from '@angular/core';
import { JsonDataService } from 'src/app/services/json-data.service';
import { FoodSearchService } from "../../services/food-search.service";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  cuisineList: any;
  userPreferences: Map<number, string> = new Map<number, string>();

  constructor(
    private jsonDataService: JsonDataService,
    private foodSearchService: FoodSearchService
  ) { }

  ngOnInit(): void {
    this.cuisineList = this.jsonDataService.getCuisineTypes();
  }

  checkBoxHandler(event: any){
    if(!this.userPreferences.has(event.target.value || this.userPreferences.size == 0)){
      this.userPreferences.set(event.target.value, event.target.name);
    } else {
      this.userPreferences.delete(event.target.value);
    }
  }

  searchSubmit(){
    this.foodSearchService.search(this.userPreferences);
  }

}

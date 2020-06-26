import { Component, OnInit } from '@angular/core';
import { JsonDataService } from 'src/app/services/json-data.service';
import { FoodSearchService } from '../../services/food-search.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  cuisineList: any;

  constructor(
    private jsonDataService: JsonDataService,
    private foodService: FoodSearchService,
  ) { }

  ngOnInit(): void {
    this.foodService.reset();
    navigator.geolocation.getCurrentPosition((position) => {
      this.foodService.lat = position.coords.latitude;
      this.foodService.lng = position.coords.longitude;
      console.log(position);
    },
    function(error) {
      if (error.code == error.PERMISSION_DENIED){
        alert(error.message);
      }
    });
    this.cuisineList = this.jsonDataService.getCuisineTypes();
  }

  checkBoxHandler(event: any){
    if(!this.foodService.userPreferences.has(event.target.value || this.foodService.userPreferences.size == 0)){
      this.foodService.userPreferences.set(event.target.value, event.target.name);
    } else {
      this.foodService.userPreferences.delete(event.target.value);
    }
  }

  randomBtnHandler(event: any){
    this.foodService.isChecked = event.target.checked;
    console.log(this.foodService.isChecked);
  }

  submit(){
    this.foodService.checkDisabled();
  }

}

import { Component, OnInit } from '@angular/core';
import { JsonDataService } from 'src/app/services/json-data.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  cuisineList: any;
  userPreferences: string[] = [];

  constructor(
    private jsonDataService: JsonDataService
  ) { }

  ngOnInit(): void {
    this.cuisineList = this.jsonDataService.getCuisineTypes();
  }

}

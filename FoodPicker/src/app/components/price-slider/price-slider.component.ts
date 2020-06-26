import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { FoodSearchService } from '../../services/food-search.service';

@Component({
  selector: 'app-price-slider',
  templateUrl: './price-slider.component.html',
  styleUrls: ['./price-slider.component.css']
})
export class PriceSliderComponent implements OnInit {

  minValue: number = 1;
  maxValue: number = 4;
  options: Options = {
    floor: 1,
    ceil: 4,
    step: 1,
    showTicks: true,
    stepsArray: [
      {value: 1, legend: '$'},
      {value: 2, legend: '$$'},
      {value: 3, legend: '$$$'},
      {value: 4, legend: '$$$$'}
    ]
  };

  constructor(
    private foodService: FoodSearchService
  ) { }

  ngOnInit(): void {}

  updateValues(){
    this.foodService.minPrice = this.minValue;
    this.foodService.maxPrice = this.maxValue;
    console.log(this.foodService.minPrice, this.foodService.maxPrice);
  }

}

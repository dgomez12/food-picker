import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { FoodSearchService } from 'src/app/services/food-search.service';

@Component({
  selector: 'app-distance-slider',
  templateUrl: './distance-slider.component.html',
  styleUrls: ['./distance-slider.component.css']
})
export class DistanceSliderComponent implements OnInit {

  value: number = 5;
  options: Options = {
    floor: 5,
    ceil: 30,
    step: 5,
    showTicks: true,
    stepsArray: [
      {value: 5, legend: '5'},
      {value: 10, legend: '10'},
      {value: 15, legend: '15'},
      {value: 20, legend: '20'},
      {value: 25, legend: '25'},
      {value: 30, legend: '30'}
    ]
  };
  
  constructor(
    private foodService: FoodSearchService
  ) { }

  ngOnInit(): void {
  }

  updateValues(){
    this.foodService.distance = (this.value*1609.34);
    console.log(this.foodService.distance, this.value);
  }

}

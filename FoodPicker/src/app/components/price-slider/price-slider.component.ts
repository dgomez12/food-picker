import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-price-slider',
  templateUrl: './price-slider.component.html',
  styleUrls: ['./price-slider.component.css']
})
export class PriceSliderComponent implements OnInit {

  // iconMap: Map<number, string>;
  minValue: number = 1;
  maxValue: number = 4;
  options: Options = {
    floor: 1,
    ceil: 4,
    step: 1,
    showTicks: true,
    stepsArray: [
      {value: 1, legend: 'Inexpensive'},
      {value: 2, legend: 'Moderate'},
      {value: 3, legend: 'Expensive'},
      {value: 4, legend: 'Very Expensive'}
    ]
  };

  constructor() { }

  ngOnInit(): void {}

}

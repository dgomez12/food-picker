import { Component, OnInit } from '@angular/core';
import { FoodSearchService } from '../../services/food-search.service';
import { Restaurant } from 'src/app/interfaces/restaurant';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  lat: string = '';
  lng: string = '';
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

  // ngOnInit(): void {
  //   this.foodService.getResults().subscribe(data =>{
  //     if(data.hasOwnProperty('next_page_token')){
  //       setTimeout(() => {
  //         console.log(data.next_page_token);
  //         this.foodService.getNextPage(data.next_page_token).subscribe(data => {
  //           this.nextPageResults = data.results;
  //           console.log(data);
  //         });
  //       }, 15000);
  //     }
  //     this.restaurantResults = data.results;
  //     console.log(data);
  //     this.lat = this.foodService.userLatitude;
  //     this.lng = this.foodService.userLongitude;
  //     this.zoom = 13;
  //   });
  // }

}

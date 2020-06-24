import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './components/food/food.component';
import { DessertComponent } from './components/dessert/dessert.component';
import { PriceSliderComponent } from './components/price-slider/price-slider.component';
import { ResultsComponent } from './components/results/results.component';
import { DistanceSliderComponent } from './components/distance-slider/distance-slider.component';


const routes: Routes = [
  { path: '', redirectTo: 'food', pathMatch: 'full'},
  { path: 'food', component: FoodComponent },
  { path: 'dessert', component: DessertComponent},
  { path: 'results', component: ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FoodComponent, DessertComponent, PriceSliderComponent, ResultsComponent, DistanceSliderComponent]

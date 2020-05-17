import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './components/food/food.component';
import { DessertComponent } from './components/dessert/dessert.component';


const routes: Routes = [
  { path: 'food', component: FoodComponent},
  { path: 'dessert', component: DessertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FoodComponent, DessertComponent]

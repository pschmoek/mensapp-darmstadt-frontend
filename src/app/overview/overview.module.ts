import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListComponent } from './components/meal-list/meal-list.component';
import { MealComponent } from './components/meal/meal.component';
import { MealLocationComponent } from './components/meal-location/meal-location.component';
import { MealWithLocationsService } from './services/meal-with-locations.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MealListComponent, MealComponent, MealLocationComponent],
  exports: [MealListComponent],
  providers: [MealWithLocationsService]
})
export class OverviewModule { }

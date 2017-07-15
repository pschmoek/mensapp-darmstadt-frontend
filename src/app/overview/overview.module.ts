import { NgModule } from '@angular/core';

import { MealListComponent } from './components/meal-list/meal-list.component';
import { MealComponent } from './components/meal/meal.component';
import { MealLocationComponent } from './components/meal-location/meal-location.component';
import { MealWithLocationsService } from './services/meal-with-locations.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [MealListComponent, MealComponent, MealLocationComponent],
  exports: [MealListComponent],
  providers: [MealWithLocationsService]
})
export class OverviewModule { }

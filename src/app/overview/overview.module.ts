import { NgModule } from '@angular/core';

import { MealListComponent } from './components/meal-list/meal-list.component';
import { MealComponent } from './components/meal/meal.component';
import { MealLocationComponent } from './components/meal-location/meal-location.component';
import { MealWithLocationsService } from './services/meal-with-locations.service';
import { SharedModule } from '../shared/shared.module';
import { OverviewComponent } from './components/overview/overview.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MealStore } from './models/meal.store';
import { MensaService } from './services/mensa.service';
import { MealFilterService } from './services/meal-filter.service';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [MealListComponent, MealComponent, MealLocationComponent,
    OverviewComponent, ToolbarComponent, SpinnerComponent],
  exports: [MealListComponent],
  providers: [MealWithLocationsService, MealStore, MensaService, MealFilterService]
})
export class OverviewModule { }

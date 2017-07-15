import { Routes } from '@angular/router';

import { MealListComponent } from './overview/components/meal-list/meal-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'meals', pathMatch: 'full' },
  { path: 'meals', component: MealListComponent }
];

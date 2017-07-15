import { Routes } from '@angular/router';

import { OverviewComponent } from './overview/components/overview/overview.component';

export const routes: Routes = [
  { path: '', redirectTo: 'meals', pathMatch: 'full' },
  { path: 'meals', component: OverviewComponent }
];

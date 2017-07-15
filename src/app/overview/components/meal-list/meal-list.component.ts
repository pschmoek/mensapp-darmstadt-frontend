import { Component, Input } from '@angular/core';

import { MealWithLocations } from '../../models/meal-with-locations';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent {
  @Input() items: MealWithLocations[];
}

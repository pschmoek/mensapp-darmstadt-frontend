import { Component, OnInit, Input } from '@angular/core';

import { MealWithLocations } from '../../models/meal-with-locations';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  @Input() mealWithLocation: MealWithLocations;

  constructor() { }

  ngOnInit() {
  }

}

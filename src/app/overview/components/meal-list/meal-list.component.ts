import { Component, OnInit } from '@angular/core';

import { MealWithLocations } from '../../models/meal-with-locations';
import { MealWithLocationsService } from '../../services/meal-with-locations.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {

  items: MealWithLocations[];

  constructor(private service: MealWithLocationsService) { }

  ngOnInit() {
    this.service.getMeals('18.07.2017').subscribe(m => this.items = m);
  }
}

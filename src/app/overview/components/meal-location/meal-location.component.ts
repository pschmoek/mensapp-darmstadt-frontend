import { Component, OnInit, Input } from '@angular/core';

import { MealLocation } from '../../models/meal-location';

@Component({
  selector: 'app-meal-location',
  templateUrl: './meal-location.component.html',
  styleUrls: ['./meal-location.component.css']
})
export class MealLocationComponent implements OnInit {

  @Input() mealLocation: MealLocation;

  constructor() { }

  ngOnInit() {
  }

}

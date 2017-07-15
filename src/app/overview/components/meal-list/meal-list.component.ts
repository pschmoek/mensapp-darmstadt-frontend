import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

import { MealWithLocations } from '../../models/meal-with-locations';
import { MealWithLocationsService } from '../../services/meal-with-locations.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  dateControl = new FormControl();
  mensaControl = new FormControl();
  items: MealWithLocations[];
  mensas = [{name: 'alle', sublocation: '', id: -1}];

  constructor(private service: MealWithLocationsService) { }

  ngOnInit() {
    this.dateControl.valueChanges.subscribe(v => {
      if (v) {
        this.service.getMeals(moment(v).format('DD.MM.YYYY')).subscribe(m => this.items = m);
      }
    });
    this.dateControl.setValue(new Date());
    this.mensaControl.setValue(-1);
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import 'rxjs/add/operator/distinctUntilChanged';

import { MealStore } from '../../models/meal.store';
import { Mensa } from '../../models/mensa';
import { MealWithLocationsService } from '../../services/meal-with-locations.service';
import { MealWithLocations } from '../../models/meal-with-locations';
import { MensaService } from '../../services/mensa.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  isLoading$: Observable<boolean>;
  meals$: Observable<MealWithLocations[]>;
  date$: Observable<string>;
  mensas$: Observable<Mensa[]>;

  constructor(
    private store: MealStore,
    private service: MealWithLocationsService,
    private mensaService: MensaService
  ) {
    this.isLoading$ = this.store.state$.map(s => s.isLoading).distinctUntilChanged();
    this.meals$ = this.store.state$.map(s => s.mealsWithLocations).distinctUntilChanged();
    this.date$ = this.store.state$.map(s => s.date).distinctUntilChanged();
    this.mensas$ = this.store.state$.map(s => s.mensas).distinctUntilChanged();
  }

  ngOnInit() {
    this.mensaService.initialize();
    const today = moment().format('DD.MM.YYYY');
    this.service.initializeMeals(today);
  }

  onDateSelected(date: string) {
    this.service.loadMeals(date);
  }

}

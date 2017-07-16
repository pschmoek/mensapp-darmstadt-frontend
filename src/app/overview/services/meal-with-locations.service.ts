import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/finally';

import { MealWithLocations } from '../models/meal-with-locations';
import { Meal } from './meal';
import { MealStore } from '../models/meal.store';

@Injectable()
export class MealWithLocationsService {
  private readonly url = '/api/meals/';

  constructor(private http: HttpClient, private store: MealStore) { }

  initializeMeals(date: string) {
    this.store.state$.take(1).subscribe(currentState => {
      if (currentState.meals) {
        return;
      }

      this.loadMeals(date);
    });
  }

  loadMeals(date: string) {
    this.store.setMeals(null, date);
    this.store.setLoading(true);
    this.load(date)
      .finally(() => this.store.setLoading(false))
      .subscribe(val => this.store.setMeals(val, date));
  }

  private load(date: string): Observable<MealWithLocations[]> {
    return this.http.get<Meal[]>(this.url + date)
        .map(meals => meals.map(m => ({
          mealId: m.id,
          mealName: m.title,
          date: date,
          lastDatePresent: m.lastDate,
          locations: m.locations.map(l => ({
            mensaId: l.mensaId,
            mensaName: l.location,
            mensaSublocationName: l.subLocation,
            price: l.price
          }))
        })));
  }

}

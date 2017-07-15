import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { MealWithLocations } from '../models/meal-with-locations';
import { Meal } from './meal';

@Injectable()
export class MealWithLocationsService {
  private readonly url = '/api/meals/';

  constructor(private http: HttpClient) { }

  getMeals(date: string): Observable<MealWithLocations[]> {
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
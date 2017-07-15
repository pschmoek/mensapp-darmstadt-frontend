import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { MealWithLocations } from '../models/meal-with-locations';

@Injectable()
export class MealWithLocationsService {
  private readonly url = '/api/meals/';
  
  constructor(private http: Http) { }

  getMeals(date: string): Observable<MealWithLocations[]> {
    return this.http.get(this.url + date)
      .map((r: Response) => r.json())
      .map(r => r.map(v => ({
        mealId: v.id,
        mealName: v.title,
        date: date,
        lastDatePresent: v.lastDate,
        locations: v.locations.map(l => ({
          mensaId: l.mensaId,
          mensaName: l.location,
          mensaSublocationName: l.subLocation,
          price: l.price
        }))
      })));
  }
}
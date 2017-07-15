import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { MealState } from './meal.state';
import { MealWithLocations } from './meal-with-locations';

export const initialState: MealState = {
  currentFilter: { mensaId: null, searchString: null },
  date: moment().format('DD.MM.YYYY'),
  isLoading: false,
  mealsWithLocations: null
};

@Injectable()
export class MealStore {
  private stateSource = new BehaviorSubject<MealState>(initialState);
  state$ = this.stateSource.asObservable();

  setLoading(isLoading: boolean) {
    const current = this.stateSource.getValue();
    this.stateSource.next({
      currentFilter: current.currentFilter,
      date: current.date,
      mealsWithLocations: current.mealsWithLocations,
      isLoading: isLoading
    });
  }

  setMeals(meals: MealWithLocations[], date: string) {
    const current = this.stateSource.getValue();
    this.stateSource.next({
      currentFilter: current.currentFilter,
      date: date,
      isLoading: current.isLoading,
      mealsWithLocations: meals
    });
  }
}

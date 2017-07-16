import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { MealState } from './meal.state';
import { Mensa } from './mensa';
import { MealWithLocations } from './meal-with-locations';

export const nullMensa: Mensa = { id: -1, location: '', subLocation: '' };

export const initialState: MealState = {
  currentFilter: { mensaId: -1, searchString: null },
  date: moment().format('DD.MM.YYYY'),
  isLoading: false,
  mealsWithLocations: null,
  mensas: [nullMensa]
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
      isLoading: isLoading,
      mensas: current.mensas
    });
  }

  setMeals(meals: MealWithLocations[], date: string) {
    const current = this.stateSource.getValue();
    this.stateSource.next({
      currentFilter: current.currentFilter,
      date: date,
      isLoading: current.isLoading,
      mealsWithLocations: meals,
      mensas: current.mensas
    });
  }

  setMensas(mensas: Mensa[]) {
    const current = this.stateSource.getValue();
    this.stateSource.next({
      currentFilter: current.currentFilter,
      date: current.date,
      isLoading: current.isLoading,
      mealsWithLocations: current.mealsWithLocations,
      mensas: [nullMensa, ...mensas]
    });
  }

}

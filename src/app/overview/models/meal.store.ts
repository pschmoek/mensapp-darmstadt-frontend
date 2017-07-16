import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { MealState } from './meal.state';
import { Mensa } from './mensa';
import { MealWithLocations } from './meal-with-locations';
import { MealFilter } from './meal-filter';
import { MealFilterService } from '../services/meal-filter.service';

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

  constructor(private filterService: MealFilterService) { }

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
    const filtered = this.filterService.filter(meals, current.currentFilter);
    this.stateSource.next({
      currentFilter: current.currentFilter,
      date: date,
      isLoading: current.isLoading,
      mealsWithLocations: filtered,
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

  setMensaFilter(mensaId: number) {
    const current = this.stateSource.getValue();
    const newFilter: MealFilter = {
      searchString: current.currentFilter.searchString,
      mensaId: mensaId
    };
    const newMeals = this.filterService.filter(current.mealsWithLocations, newFilter);
    this.stateSource.next({
      date: current.date,
      isLoading: current.isLoading,
      mensas: current.mensas,
      mealsWithLocations: newMeals,
      currentFilter: newFilter
    });
  }

}

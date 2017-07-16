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
  appliedFilter: { mensaId: -1, searchString: null },
  date: moment().format('DD.MM.YYYY'),
  isLoading: false,
  meals: null,
  filteredMeals: null,
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
      appliedFilter: current.appliedFilter,
      date: current.date,
      meals: current.meals,
      isLoading: isLoading,
      mensas: current.mensas,
      filteredMeals: current.filteredMeals
    });
  }

  setMeals(meals: MealWithLocations[], date: string) {
    const current = this.stateSource.getValue();
    const filtered = this.filterService.filter(meals, current.appliedFilter);
    this.stateSource.next({
      appliedFilter: current.appliedFilter,
      date: date,
      isLoading: current.isLoading,
      meals: meals,
      filteredMeals: filtered,
      mensas: current.mensas
    });
  }

  setMensas(mensas: Mensa[]) {
    const current = this.stateSource.getValue();
    this.stateSource.next({
      appliedFilter: current.appliedFilter,
      date: current.date,
      isLoading: current.isLoading,
      meals: current.meals,
      filteredMeals: current.filteredMeals,
      mensas: [nullMensa, ...mensas]
    });
  }

  setMensaFilter(mensaId: number) {
    const current = this.stateSource.getValue();
    const newFilter: MealFilter = {
      searchString: current.appliedFilter.searchString,
      mensaId: mensaId
    };
    const newMeals = this.filterService.filter(current.meals, newFilter);
    this.stateSource.next({
      date: current.date,
      isLoading: current.isLoading,
      mensas: current.mensas,
      meals: current.meals,
      filteredMeals: newMeals,
      appliedFilter: newFilter
    });
  }

}

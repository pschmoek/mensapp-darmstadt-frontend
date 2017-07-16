import { Injectable } from '@angular/core';
import { MealWithLocations } from '../models/meal-with-locations';
import { MealFilter } from '../models/meal-filter';

@Injectable()
export class MealFilterService {

  filter(meals: MealWithLocations[], filter: MealFilter): MealWithLocations[] {
    if (!meals) {
      return undefined;
    }

    const result = [];
    for (const meal of meals) {
      const temp = Object.assign({}, meal);
      temp.locations = [];
      for (const location of meal.locations) {
        const tempLocation = Object.assign({}, location);
        tempLocation.isFiltered = filter.mensaId !== -1 && filter.mensaId !== location.mensaId;
        temp.locations.push(tempLocation);
      }

      if (!temp.locations.every(l => l.isFiltered)) {
        result.push(temp);
      }
    }

    return result;
  }

}

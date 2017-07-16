import { Injectable } from '@angular/core';
import { MealWithLocations } from '../models/meal-with-locations';
import { MealFilter } from '../models/meal-filter';

@Injectable()
export class MealFilterService {

  filter(meals: MealWithLocations[], filter: MealFilter) {
    if (!meals) {
      return undefined;
    }

    const result: MealWithLocations[] = [];
    for (const meal of meals) {
      if (filter.mensaId !== -1 && meal.locations.every(l => l.mensaId !== filter.mensaId)) {
        continue;
      }

      if (filter.searchString && meal.mealName.indexOf(filter.searchString) === -1) {
        continue;
      }

      result.push(meal);
    }

    return result;
  }

}

import { MealWithLocations } from './meal-with-locations';
import { MealFilter } from './meal-filter';
import { Mensa } from './mensa';

export interface MealState {
  mealsWithLocations: MealWithLocations[];
  isLoading: boolean;
  date: string;
  currentFilter: MealFilter;
  mensas: Mensa[];
}

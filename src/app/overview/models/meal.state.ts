import { MealWithLocations } from './meal-with-locations';
import { MealFilter } from './meal-filter';
import { Mensa } from './mensa';

export interface MealState {
  meals: MealWithLocations[];
  filteredMeals: MealWithLocations[];
  isLoading: boolean;
  date: string;
  appliedFilter: MealFilter;
  mensas: Mensa[];
}

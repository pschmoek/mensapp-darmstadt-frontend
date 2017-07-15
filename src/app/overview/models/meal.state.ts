import { MealWithLocations } from '../models/meal-with-locations';
import { MealFilter } from '../models/meal-filter';

export interface MealState {
  mealsWithLocations: MealWithLocations[];
  isLoading: boolean;
  date: string;
  currentFilter: MealFilter;
}

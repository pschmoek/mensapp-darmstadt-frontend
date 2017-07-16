import { MealLocation } from './meal-location';

export interface MealWithLocations {
  mealId: number;
  mealName: string;
  date: string;
  lastDatePresent: string;
  locations: MealLocation[];
}

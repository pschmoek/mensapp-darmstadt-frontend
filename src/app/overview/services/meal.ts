import { Location } from './location';

export interface Meal {
  id: number;
  title: string;
  lastDate?: string;
  locations: Location[];
}

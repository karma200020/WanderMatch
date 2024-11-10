export interface Destination {
  name: string;
  budget: number;
  climate: string;
  terrain: string;
  foodOptions: string[];
  weatherForecast: string;
  recommendedDays: number;
  suitableAgeGroups: string[]; // New property
}

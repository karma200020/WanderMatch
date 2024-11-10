import { Injectable } from '@angular/core';
import { Destination } from '../models/destination.model';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
    private destinations: Destination[] = [
      {
        name: 'Bali',
        budget: 1000,
        climate: 'tropical',
        terrain: 'beach',
        foodOptions: ['seafood', 'vegetarian'],
        weatherForecast: 'sunny',
        recommendedDays: 7,
        suitableAgeGroups: ['adults', 'seniors']
      },
      {
        name: 'Disneyland',
        budget: 2000,
        climate: 'temperate',
        terrain: 'amusement park',
        foodOptions: ['vegetarian', 'continental'],
        weatherForecast: 'sunny',
        recommendedDays: 3,
        suitableAgeGroups: ['children', 'teens', 'adults']
      },
      // Add more destinations...
    ];

  getRecommendations(userPreferences: any): Destination[] {
    return this.destinations.filter((destination) => {
      return (
        destination.budget <= userPreferences.budget &&
        destination.climate === userPreferences.climate &&
        destination.terrain === userPreferences.terrain &&
        destination.foodOptions.includes(userPreferences.foodAvailability) &&
        destination.recommendedDays <= userPreferences.days
      );
    });
  }
}

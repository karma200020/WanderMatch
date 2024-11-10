import { Component, EventEmitter, Output } from '@angular/core';
import { ChatGptService } from '../services/chatgpt.service';
import { UserPreferences } from '../models/user-preferences.model';

@Component({
  selector: 'app-destination-form',
  templateUrl: './destination-form.component.html',
})
export class DestinationFormComponent {
  userPreferences: UserPreferences = {
    budget: 0,
    climate: '',
    terrain: '',
    foodAvailability: '',
    days: 0,
    ageGroup: '',
  };
  recommendations: string = '';
  @Output() recommendationsChange = new EventEmitter<string>();


  constructor(private chatGptService: ChatGptService) {}

  submitForm() {
    const prompt = `Suggest a travel destination based on these preferences:
    Budget: ${this.userPreferences.budget} USD,
    Climate: ${this.userPreferences.climate},
    Terrain: ${this.userPreferences.terrain},
    Food Availability: ${this.userPreferences.foodAvailability},
    Duration: ${this.userPreferences.days} days,
    Age Group: ${this.userPreferences.ageGroup}.
    Provide specific recommendations and reasons for suitability.`;

    this.chatGptService.getRecommendations(prompt).subscribe((response) => {
      this.recommendations = response.choices[0].text;
      this.recommendationsChange.emit(this.recommendations);
    });


  }
}


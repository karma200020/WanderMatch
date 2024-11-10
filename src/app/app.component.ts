import { Component } from '@angular/core';
import { Destination } from './models/destination.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  recommendations: string = ''; // Holds recommendations text

  // Method to receive recommendations from the form component
  updateRecommendations(recommendations: string) {
    this.recommendations = recommendations;
  }
}

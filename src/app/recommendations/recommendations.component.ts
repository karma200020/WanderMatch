import { Component, Input } from '@angular/core';
import { Destination } from '../models/destination.model';

@Component({
  selector: 'app-recommendations',
  standalone: false,
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})
export class RecommendationsComponent {
  @Input() recommendations: string = '';  // Input property to accept recommendations from the parent component
}

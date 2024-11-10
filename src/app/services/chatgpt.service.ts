import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatGptService {
  private apiUrl = 'https://api.openai.com/v1/completions';
  private apiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your OpenAI API key

  constructor(private http: HttpClient) {}

  getRecommendations(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    });

    const body = {
      model: 'text-davinci-003', // You can use GPT-4 if available
      prompt: prompt,
      max_tokens: 500,
      temperature: 0.7,
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}

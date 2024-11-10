import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Adjust the path as needed
import { DestinationFormComponent } from './destination-form/destination-form.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,DestinationFormComponent,RecommendationsComponent],
  imports: [BrowserModule, FormsModule,HttpClientModule,],
  bootstrap: [AppComponent]
})
export class AppModule {}

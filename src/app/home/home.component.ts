import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../models/weather.mode';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cityName: string = 'Sydney';
  weatherData?: WeatherData;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSearchSubmit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
        }
      });
  }

  clearSearch(): void {
    this.cityName = '';
  }
}

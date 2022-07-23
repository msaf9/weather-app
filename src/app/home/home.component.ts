import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../models/weather.mode';
import { WeatherService } from '../services/weather.service';

/**
 * Home component
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**
   * variable for city name
   */
  cityName: string = 'Sydney';

  /**
   * Variable to fetch weather data from the service
   */
  weatherData?: WeatherData;

  /**
   * Providing WeatherService to the constructor
   * @param weatherService 
   */
  constructor(private weatherService: WeatherService) { }

  /**
   * Setting up default city name
   */
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  /**
   * Method to input city name to the getWeatherData method
   */
  onSearchSubmit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  /**
   * Method to get data from the service method
   * @param cityName 
   */
  getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
        }
      });
  }

  /**
   * Method to clear search bar
   */
  clearSearch(): void {
    this.cityName = '';
  }
}

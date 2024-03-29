import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.mode';

/**
 * Weather Service
 */
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  /**
   * Providing HttpClient to the constructor
   * @param http 
   */
  constructor(private http: HttpClient) { }

  /**
   * To fetch the weather data from the API
   * @param cityName 
   * @returns Observable<WeatherData>
   */
  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json')
    })
  }
}

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';

fdescribe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        WeatherService
      ]
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test getWeatherData', () => {
    const validCityName = 'Sydney';
    expect(service.getWeatherData(validCityName)).toBeTruthy();

    const emptyCityName = '';
    expect(service.getWeatherData(emptyCityName)).toBeTruthy();
  });

});

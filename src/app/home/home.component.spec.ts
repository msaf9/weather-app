import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { WeatherService } from '../services/weather.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let weatherServiceCall: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule
      ],
      providers: [
        WeatherService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject(
    [WeatherService],
    (weatherService: WeatherService) => {
      weatherServiceCall = weatherService;
    }
  ));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test clearSearch', () => {
    component.cityName = 'Sydney';
    component.clearSearch();
    expect(component.cityName).toEqual('');
  });

  it('test onSearchSubmit', () => {
    component.cityName = 'Sydney';
    spyOn(component, 'getWeatherData').and.callThrough();
    component.onSearchSubmit();
    expect(component.getWeatherData).toHaveBeenCalled();
    expect(component.cityName).toEqual('');
  });

  it('test getWeatherData', () => {
    component.cityName = 'Sydney';
    spyOn(weatherServiceCall, 'getWeatherData').and.callThrough();
    component.getWeatherData(component.cityName);
    expect(weatherServiceCall.getWeatherData).toHaveBeenCalled();
  });
});

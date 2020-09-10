import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Potd, MarsApi, MarsWeather } from './api.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  potdUrl = 'https://api.nasa.gov/planetary/apod?api_key=JNtKFhRVLUCf3eJBcrFp0SbvWRw4u2g50TSvLA60';
  marsUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=JNtKFhRVLUCf3eJBcrFp0SbvWRw4u2g50TSvLA60';
  marsWeatherUrl = 'https://api.nasa.gov/insight_weather/?api_key=';
  apiKey = 'JNtKFhRVLUCf3eJBcrFp0SbvWRw4u2g50TSvLA60';
  marsWeatherUrlFull = 'https://api.nasa.gov/insight_weather/?api_key=JNtKFhRVLUCf3eJBcrFp0SbvWRw4u2g50TSvLA60&feedtype=json&ver=1.0';

  constructor(private _http: HttpClient) { }

  getMars() {
    return this._http.get<MarsApi>(this.marsUrl);
  }

  getPotd() {
    return this._http.get<Potd>(this.potdUrl);
  }

  getMarsWeather() {
    return this._http.get(this.marsWeatherUrlFull);
  }
}

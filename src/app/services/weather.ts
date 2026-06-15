import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../constants/interfaces';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  
  http = inject(HttpClient);

  getWeather(city: string): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(`${environment.BASE_URL}?q=${city}&appid=${environment.API_KEY}`);
  }
}

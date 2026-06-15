import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../services/weather';
import { WeatherResponse } from '../constants/interfaces';
import { TitleCasPipe } from '../pipes/titleCase.pipe';
import { StaticWeatherResponse } from '../constants/staticApiResponse';

@Component({
  selector: 'app-detail',
  imports: [TitleCasPipe],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {
  city = "";
  weatherRes = signal<WeatherResponse | null>(null);
  isErr = false;
  route = inject(ActivatedRoute);
  router = inject(Router);
  weatherService = inject(WeatherService);

  ngOnInit() {
    this.city = this.getCityFromRoute() ?? '';
    this.getWeatherData(this.city);
  }

  home() {
    this.router.navigateByUrl('/');
  }

  getCityFromRoute(): string {
    return this.route.snapshot.params['city'];
  }

  getWeatherData(city: string) {
    if(city.trim().length <= 0) return;

    // setTimeout(() => {
    //   this.weatherRes.set(StaticWeatherResponse);
    //   console.log(this.weatherRes);
    // }, 2000);

    this.weatherService.getWeather(city).subscribe({
      next: (res: WeatherResponse) => this.weatherRes.set(res),
      error: (err)  => {
        console.log(err);
        this.isErr = true;
      }
    });
  
  }
}

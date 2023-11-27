import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private apiKey ='565310e9cbf9b55e89c6f2f726b8f84c';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

 getWeather(city: string): Observable<any>
  {
    let params = {
      q: city,
      appid: this.apiKey,
    };

    return this.http.get(this.apiUrl, { params });
  }

  getWeatherIconCode(icon: string): string {
    return `http://openweathermap.org/img/wn/${icon}.png`;
  }
}

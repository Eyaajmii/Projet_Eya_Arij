import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { PositionService } from 'src/app/services/position.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private weatherService: PositionService) {}
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };
  weatherData: any;

  ngOnInit() {
    this.weatherService.getWeather('Tunis').subscribe((data) => {
      console.log(data);
      this.weatherData = data;
    });
  }

  convertToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }
  getWeatherIconCode(): string {
    if (this.weatherData && this.weatherData.weather && this.weatherData.weather[0].icon) {
      return `http://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}.png`;
    }
    return ''; // Return a default image or handle missing icon as needed
  }
}

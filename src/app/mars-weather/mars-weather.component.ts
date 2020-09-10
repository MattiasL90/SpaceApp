import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MarsWeather } from '../api.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mars-weather',
  template: `
  <h3> Mars Weather </h3>
  <mat-expansion-panel hideToggle *ngIf="!!weather">
    <mat-expansion-panel-header>
      <mat-panel-title>
        <p class="bold">Today</p>
      </mat-panel-title>
    </mat-expansion-panel-header>
    <p>Highest temperature: {{ weather[0].AT.mx }}</p>
    <p>Lowest temperature: {{ weather[0].AT.mn }}</p>
  </mat-expansion-panel>
  <mat-expansion-panel hideToggle *ngIf="!!weather">
    <mat-expansion-panel-header>
      <mat-panel-title>
        <p class="bold">Tomorrow</p>
      </mat-panel-title>
    </mat-expansion-panel-header>
    <p>Highest temperature: {{ weather[1].AT.mx }}</p>
    <p>Lowest temperature: {{ weather[1].AT.mn }}</p>
  </mat-expansion-panel>
  `,
  styles: [ '.bold { font-weight: bold; color: #0E92CF; }',
            'mat-expansion-panel { background-color: #C3E2F0; }',
            'h3 { text-align: center; }'
  ]
})
export class MarsWeatherComponent implements OnInit {
  marsWeather: MarsWeather;
  weather = [];

  constructor(private dataService: DataService) {  }

  ngOnInit() {
    this.dataService.getMarsWeather().pipe(map(responsData => {
      for (const key in responsData) {
        if (responsData.hasOwnProperty(key))
        {
          this.weather.push({...responsData[key], sol: key});
        }
      }
    })).subscribe();
  }
}

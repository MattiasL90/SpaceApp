import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Potd } from '../api.model';

@Component({
  selector: 'app-picture-of-the-day',
  template: `
  <mat-card *ngIf="!!potd">
    <mat-card-header>
        <mat-card-title>Picture of the day</mat-card-title>
    </mat-card-header>
    <div>
        <img id="smallPotd" src="{{ potd.url }}" (click)="imgPopup()">
    </div>
</mat-card>
  <div id="overlay" (click)="imgPopdown()" class="color">
    <h1 class="title"> {{ potd.title }} </h1>
    <img id="bigPotd" src="{{ potd.hdurl }}">
    <p class="explanation"> {{ potd.explanation }} </p>
  </div>
  `,
  styles: [
    '#smallPotd { width: 100%; }',
    '#overlay { position: fixed; display: none; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.5); z-index: 2; cursor: pointer; }',
    '#bigPotd { place-items: center; max-width:900px; max-height: 600px; display: block; margin-left: auto; margin-right: auto; }',
    '.explanation { padding-left: 50px; padding-right: 50px; }',
    '.title { margin-top: 50px; text-align: center; margin-top: 5%; }',
    '.makeCenter { text-align: center; }'
  ]
})
export class PictureOfTheDayComponent implements OnInit {
  potd: Potd;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    try {
      return this.dataService.getPotd().subscribe(data => this.potd = data);
    }
    catch (e) {
    }
  }

  imgPopdown(): void {
    const element = document.getElementById('overlay');
    element.style.display = 'none';
  }

  imgPopup(): void {
    const element = document.getElementById('overlay');
    element.style.display = 'block';
  }
}

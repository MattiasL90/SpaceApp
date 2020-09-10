import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MarsApi } from '../api.model';

@Component({
  selector: 'app-mars-card',
  templateUrl: './mars-card.component.html',
  styleUrls: ['./mars-card.component.scss']
})
export class MarsCardComponent implements OnInit {
  marsPictures: MarsApi;
  imgOrder = 0;

  constructor(private dataService: DataService) {  }

  ngOnInit() {
    return this.dataService.getMars().subscribe(data => this.marsPictures = data);
  }

  nextImg(): void {
    this.imgOrder++;
  }

  previousImg(): void {
    this.imgOrder--;
  }
}

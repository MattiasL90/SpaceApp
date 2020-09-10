import { Component, OnInit, ViewChild } from '@angular/core';
import { Mars, MarsApi } from '../api.model';
import { MarsCardComponent } from '../mars-card/mars-card.component';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.scss']
})
export class MarsComponent implements OnInit {

  @ViewChild(MarsCardComponent) marsCard: MarsCardComponent;

  constructor() { }

  ngOnInit() {
  }
}

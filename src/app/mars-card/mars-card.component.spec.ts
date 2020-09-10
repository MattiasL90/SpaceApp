import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsCardComponent } from './mars-card.component';

describe('MarsCardComponent', () => {
  let component: MarsCardComponent;
  let fixture: ComponentFixture<MarsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

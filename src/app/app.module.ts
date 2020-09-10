import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbTabsetModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DataService } from './data.service';
import { PictureOfTheDayComponent } from './picture-of-the-day/picture-of-the-day.component';
import { HomeComponent } from './home/home.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MarsComponent } from './mars/mars.component';
import { MatCardModule } from '@angular/material/card';
import { MarsCardComponent } from './mars-card/mars-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MarsWeatherComponent } from './mars-weather/mars-weather.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { AsteroidsComponent } from './asteroids/asteroids.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    PictureOfTheDayComponent,
    HomeComponent,
    TopNavComponent,
    MarsComponent,
    MarsCardComponent,
    MarsWeatherComponent,
    AsteroidsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbTabsetModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    CommonModule,
    MatProgressSpinnerModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

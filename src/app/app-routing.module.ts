import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MarsComponent } from './mars/mars.component';
import { AsteroidsComponent } from './asteroids/asteroids.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mars', component: MarsComponent },
  { path: 'asteroids', component: AsteroidsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

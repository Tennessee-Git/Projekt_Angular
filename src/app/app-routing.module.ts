import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { ShowingsPageComponent } from './pages/showings-page/showings-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'Filmy', component: MoviesPageComponent},
  { path: 'Seanse', component: ShowingsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

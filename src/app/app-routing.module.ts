import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { PhotoPageComponent } from './core/pages/photo-page/photo-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'photo/:id', component: PhotoPageComponent},
  {path: '', component: HomePageComponent},
  {path: '', component: HomePageComponent},
  {path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

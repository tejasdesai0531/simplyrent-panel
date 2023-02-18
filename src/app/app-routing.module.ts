import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/city' },
  { path: 'city', loadChildren: () => import('./city/city.module').then(m => m.CityModule) },
  { path: 'banner', loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

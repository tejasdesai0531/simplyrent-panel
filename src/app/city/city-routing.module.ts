import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCityComponent } from './components/add-city/add-city.component';
import { CityListComponent } from './components/city-list/city-list.component';

const routes: Routes = [
  { path: '', component: CityListComponent },
  { path: 'add-city', component: AddCityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }

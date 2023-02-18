import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { CityListComponent } from './components/city-list/city-list.component';
import { AddCityComponent } from './components/add-city/add-city.component';


@NgModule({
  declarations: [
    // CityListComponent,
    // AddCityComponent
  ],
  imports: [
    CommonModule,
    CityRoutingModule
  ],
  
})
export class CityModule { }

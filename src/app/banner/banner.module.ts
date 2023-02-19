import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerRoutingModule } from './banner-routing.module';

import { AddBannerComponent } from './components/add-banner/add-banner.component';
import { BannerListComponent } from './components/banner-list/banner-list.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddBannerComponent,
    BannerListComponent
  ],
  imports: [
    CommonModule,
    BannerRoutingModule,
    NzTableModule,
    ReactiveFormsModule
    
  ]
})
export class BannerModule { }

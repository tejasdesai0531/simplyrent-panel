import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerRoutingModule } from './banner-routing.module';

import { AddBannerComponent } from './components/add-banner/add-banner.component';
import { BannerListComponent } from './components/banner-list/banner-list.component';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [
    AddBannerComponent,
    BannerListComponent
  ],
  imports: [
    CommonModule,
    BannerRoutingModule,
    NzTableModule
  ]
})
export class BannerModule { }

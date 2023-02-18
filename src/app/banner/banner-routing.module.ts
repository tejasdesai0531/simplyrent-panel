import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBannerComponent } from './components/add-banner/add-banner.component';
import { BannerListComponent } from './components/banner-list/banner-list.component';

const routes: Routes = [
  {path: '', component:BannerListComponent},
  {path: 'add-banner', component: AddBannerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannerRoutingModule { }

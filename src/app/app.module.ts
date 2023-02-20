import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { hi_IN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import hi from '@angular/common/locales/hi';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CityListComponent } from './city/components/city-list/city-list.component';
import { AddCityComponent } from './city/components/add-city/add-city.component';
import { CityModule } from './city/city.module';
import { BannerModule } from './banner/banner.module';
import { ToastrModule } from 'ngx-toastr';
import { AuthModule } from './auth/auth.module';

registerLocaleData(hi);

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    AddCityComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    CityModule,
    BannerModule,
    AuthModule
  ],

  

  providers: [
    { provide: NZ_I18N, useValue: hi_IN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

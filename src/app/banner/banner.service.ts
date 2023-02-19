import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  
  bannerList:any = [] 

  constructor(private httpServices: HttpClient) { }


  //banner list

  bannerlist():Observable<any>
  {
    return this.httpServices.get(`${environment.API_URL}api/banner`);
  }

  addBanner(data:any):Observable<any> {
    return this.httpServices.post(`${environment.API_URL}api/banner`, data);
  }
  
}

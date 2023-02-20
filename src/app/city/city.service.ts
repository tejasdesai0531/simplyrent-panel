import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cityList:any = [] 

  constructor(private httpServices: HttpClient) { }


  //citylist

  citylist():Observable<any> {
    return this.httpServices.get(`${environment.API_URL}api/city`);
  }

  addCity(data:any):Observable<any> {
    return this.httpServices.post(`${environment.API_URL}api/city`, data);
  }

  cityDetails(id:any):Observable<any> {
    return this.httpServices.get(`${environment.API_URL}api/city/${id}`);
  }

  updateCity(id:any, data:any):Observable<any> {
    return this.httpServices.put(`${environment.API_URL}api/city/${id}`, data);
  }

  uploadImage(data:any):Observable<any> {
    return this.httpServices.post(`${environment.API_URL}api/city/upload`, data);
  }


}

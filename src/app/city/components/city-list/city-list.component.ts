import { Component} from '@angular/core';
import { CityService } from '../../city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})


export class CityListComponent {

  cityList:any = [] 

  
    // cityName:String = "" 
    // cityCode:Boolean = null;
    // Status:String = ""
    // ImageUrl:String = ""
  
  constructor(private cityService: CityService) {}

  ngOnInit(): void {

        this.cityService.citylist().subscribe((result)=>{
        console.log(result)
        this.cityList = result.cities
   }) 

  }

  
  

}

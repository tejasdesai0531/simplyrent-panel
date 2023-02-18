import { Component } from '@angular/core';
import { BannerService } from '../../banner.service';

@Component({
  selector: 'app-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.scss']
})
export class BannerListComponent {

  bannerList:any = [] 

  constructor(private bannerService: BannerService) {}

  ngOnInit(): void {

        this.bannerService.bannerList().subscribe((result:any)=>{
        console.log(result)
        this.bannerList = result
   }) 

  }

  
}

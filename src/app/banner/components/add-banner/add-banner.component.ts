import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BannerService } from '../../banner.service';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.scss']
})
export class AddBannerComponent {

  bannerForm:FormGroup;

  constructor(private fb: FormBuilder, private cityService: BannerService) {

    this.bannerForm = this.fb.group({
      image_url: [null, Validators.required],
      redirect_url: [null, Validators.required],
      status: [null, Validators.required],

    })    
  }

  submit() {
    console.log(this.bannerForm)
    if(this.bannerForm.invalid) {
      this.bannerForm.markAllAsTouched()
      return 
    }
    console.log(this.bannerForm.value)
    let data = this.bannerForm.value
    let formData: FormData = new FormData(); 
    formData.append('image_url', data.image_url); 
    formData.append('redirect_url', data.redirect_url);
    formData.append('status', data.status);

    this.cityService.addBanner(formData).subscribe((result)=> {
      console.log(result)
    })
  }


}

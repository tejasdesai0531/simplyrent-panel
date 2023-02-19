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
      image: [null, Validators.required],
      redirectPage: [null, Validators.required],
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
    formData.append('image', data.name); 
    formData.append('redirectImage', data.code);
    formData.append('status', data.status);

    this.cityService.addBanner(formData).subscribe((result)=> {
      console.log(result)
    })
  }

    
  


}

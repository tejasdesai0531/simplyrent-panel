import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CityService } from '../../city.service';


@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent {
  
  cityForm: FormGroup;
 

  constructor(private fb: FormBuilder, private cityService: CityService) {

    this.cityForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      code: ["",  [Validators.required, Validators.minLength(3)]],
      status: [null, Validators.required],
      image: [null, Validators.required]
    })    
  }

  submit() {
    console.log(this.cityForm)
    if(this.cityForm.invalid) {
      this.cityForm.markAllAsTouched()
      return 
    }
    console.log(this.cityForm.value)
    let data = this.cityForm.value
    let formData: FormData = new FormData(); 
    formData.append('name', data.name); 
    formData.append('code', data.code);
    formData.append('status', data.status);
    formData.append('image', data.image);

    this.cityService.addCity(formData).subscribe((result)=> {
      console.log(result)
    })
  }

    
  

  // addCityForm = new FormGroup({
    
  //   cityName: new FormControl('',Validators.required),
  //   cityCode: new FormControl('',Validators.required),
  //   status: new FormControl('',Validators.required),
  //   imageUrl: new FormControl('',Validators.required)
  // })

  // get cityName() {
  //   return this.addCityForm.get('cityName')
  // }
}

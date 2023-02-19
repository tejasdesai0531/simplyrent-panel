import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CityService } from '../../city.service';


@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent {
  
  cityForm: FormGroup;
  isLoading = false;
  id:any = null;

  constructor(
    private fb: FormBuilder,
    private cityService: CityService,
    private toastr: ToastrService, 
    private router: Router,
    private route: ActivatedRoute
    ) {

    this.cityForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      code: ["",  [Validators.required, Validators.minLength(3)]],
      status: [null, Validators.required],
      image: [null, Validators.required]
    })    
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    if(this.id) {
      this.isLoading = true
      this.cityService.cityDetails(this.id).subscribe(
        (result:any) => {
          this.isLoading = false
          console.log(result);
          this.cityForm.patchValue({
            name: result.name,
            code: result.code,
            image: result.image_url,
            status: result.status
          })

        }
      )
    }
    
  }

  onFileChange(event:any) {
  console.log(event)
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.cityForm.patchValue({
        image: file
      });
    }
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

    this.isLoading = true;
    if(this.id) {
      this.cityService.updateCity(formData).subscribe(
        (result)=> {
            console.log(result)
            this.isLoading = false;
            this.toastr.success(result.message);
            this.router.navigate(['/city']);
        },
  
        (error) => {
          console.log(error.error.error)
          this.toastr.error(error.error.error)
          this.isLoading = false
        }
  
      )
    } else {
      this.cityService.addCity(formData).subscribe(
        (result)=> {
            console.log(result)
            this.isLoading = false;
            this.toastr.success(result.message);
            this.router.navigate(['/city']);
        },
  
        (error) => {
          console.log(error.error.error)
          this.toastr.error(error.error.error)
          this.isLoading = false
        }
  
      )
    }
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

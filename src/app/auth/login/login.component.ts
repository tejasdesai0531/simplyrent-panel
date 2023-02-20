import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // loginForm:FormGroup = {
  // email:string = 'abcd@MinValidator.com'
  // password:string = 'asdfghjk'

  // };
  
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {

  }

  // this.loginForm = this.fb.group({
  //   email: ['', [Validators.compose([Validators.required, Validators.email])] ],
  //   password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]

  // })

  // login() {
  //   console.log(this.loginForm)
    
  // }

}

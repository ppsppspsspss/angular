import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signUpForm = new FormGroup({
    fullname: new FormControl("", [Validators.required, Validators.minLength(5)]),
    username: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required]),
  })

  get Fullname(){
    return this.signUpForm.get("fullname") as FormControl
  }

  get Username(){
    return this.signUpForm.get("username") as FormControl
  }

  get Phone(){
    return this.signUpForm.get("phone") as FormControl
  }

  get Email(){
    return this.signUpForm.get("email") as FormControl
  }

  get Password(){
    return this.signUpForm.get("password") as FormControl
  }

  get ConfirmPassword(){
    return this.signUpForm.get("confirmPassword") as FormControl
  }
  

  handleSubmit(){
    this.authService.signUp(this.signUpForm.value).subscribe(res => console.log(res));
  }

}

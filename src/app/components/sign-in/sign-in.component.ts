import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  status = false;

  signInForm = new FormGroup({
    userID: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  })

  get UserID(){
    return this.signInForm.get("userID") as FormControl
  }

  get Password(){
    return this.signInForm.get("password") as FormControl
  }

  handleSubmit(){

    const user = {
      userID: Number.parseInt(this.signInForm.value.userID),
      password: this.signInForm.value.password
    }

    this.authService.signIn(user).subscribe(
      (res) => {
        this.authService.setToken(res);
        this.status = false;
        this.router.navigateByUrl('home');
      },
      (error) => {
        console.error(error);
        this.status = true;
      }
    )
  }

}

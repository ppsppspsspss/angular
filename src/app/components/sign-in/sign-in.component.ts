import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
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
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  })

  get Username(){
    return this.signInForm.get("username") as FormControl
  }

  get Password(){
    return this.signInForm.get("password") as FormControl
  }

  handleSubmit(){
    this.authService.signIn(this.signInForm.value).subscribe(
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

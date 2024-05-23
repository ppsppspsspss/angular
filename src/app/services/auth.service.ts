import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private router: Router) { this.loadCurrentUser(); }

  baseUrl = "http://localhost:5183/api/auth/"

  jwtHelperService = new JwtHelperService();

  signUp(user: any){
    return this.http.post(this.baseUrl + "sign-up", user, {
      headers: {
        'Content-Type': 'application/json'
    }
    });
  }

  signIn(user: any){
    return this.http.post(this.baseUrl + "sign-in", user, {
      responseType: 'text'
    });
  }

  isSignedIn(){
    return localStorage.getItem("access-token") ? true : false;
  }

  setToken(token: string){
    localStorage.setItem("access-token", token);
    this.loadCurrentUser();
  }

  loadCurrentUser(){
    const token = localStorage.getItem("access-token");
    const userInfo = token != null ? this.jwtHelperService.decodeToken(token) : null;
    const data = userInfo ? {
      userID: userInfo.userID,
      fullname: userInfo.fullname,
      username: userInfo.username,
      phone: userInfo.phone,
      email: userInfo.email,
      password: userInfo.password,
      role: userInfo.role,
      profilePicture: userInfo.profilePicture
    } : null;
    this.currentUser.next(data);
  }

  logOut(){
    localStorage.removeItem("access-token");
    this.router.navigateByUrl('/sign-in');
  }

}

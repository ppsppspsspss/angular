import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.css']
})
export class NavbarHeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  userID: number | null = null;
  fullname: string | null = null;
  role: string | null = null;

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      if (user) {
        this.userID = user.userID;
        this.fullname = user.fullname.toUpperCase();
        this.role = user.role;
      }
    });
  }

  navigateToProfile() {
    this.router.navigateByUrl('/home/profile');
  }

  logOut(){
    this.authService.logOut();
  }


}

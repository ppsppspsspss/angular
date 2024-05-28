import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
      path: 'sign-in',
      component: SignInComponent
  },
  {
      path: 'home',
      component: HomeComponent,
      children: [
        { path: 'profile', component: ProfileComponent },
      ],
      canActivate: [AuthGuard]
  },
  {
      path: '',
      redirectTo: 'sign-in',
      pathMatch: 'full'
  },
  {
      path: '**',
      component: PageNotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

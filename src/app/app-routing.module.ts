import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { CareerComponent } from './components/career/career.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';

const routes: Routes = [
  {
      path: '',
      component: CareerComponent
  },
  {
      path: 'home',
      component: HomeComponent,
      //canActivate: [AuthGuard]
  },
  { 
      path: 'application-form/:jobID', 
      component: ApplicationFormComponent 
  },
  {
      path: 'sign-in',
      component: SignInComponent
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

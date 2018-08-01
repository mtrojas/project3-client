import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { SignupComponent } from './signup/signup.component';
//import { PhoneDetailsComponent } from './phone-details/phone-details.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'signup', component: SignupComponent },
  //{ path: '**', redirectTo: '' }
];
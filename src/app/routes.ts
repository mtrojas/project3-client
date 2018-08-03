import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesListComponent },
  { path: 'service/:id',
    component: ServiceDetailComponent,
    // children: [
    //   path:'edit-service',
    //   component: EditServiceComponent
    // ]
  },
  { path: '**', redirectTo: '' }
];

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthService } from './services/auth.service';
import { ServicesApiService } from './services/services-api.service';
import { BlogService } from './services/blog.service';
import { SearchService } from './services/search.service';

import { routes } from './routes';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    AboutComponent,
    ServicesListComponent,
    ServiceDetailComponent,
    HomeComponent,
    BlogComponent,
    BlogDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [AuthService, ServicesApiService, BlogService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

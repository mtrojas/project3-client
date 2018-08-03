import { Component } from '@angular/core';
//import { Router } from '@angular/router';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user = JSON.parse(localStorage.getItem('user'))

  constructor(
    private authService: AuthService,
    //private router: Router
  ) { }

  handleLogout() {
    this.authService.logoutService()
    window.location.reload()
  }


}

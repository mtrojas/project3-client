import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: any;
  isLoggedIn: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))
    if(this.user) {
      this.isLoggedIn = true;
    }
    console.log(this.isLoggedIn)
  }

  handleLogout() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.router.navigate(['/'])
  }

}

import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string  = ''
  password: string = ''
  auth  = {
    email: '',
    password: ''
  }
  user: string = ''

  constructor(private authService: AuthService) { }

  handleSignup() {
    console.log(this.auth)
    this.auth.email = this.email
    this.auth.password = this.password
    this.authService.signupService(this.auth)
    .subscribe(user => {
      this.user = user
    })
    this.email = ''
    this.password = ''
  }
//added not tested, change to its own component or make a single component like beth'splease try again the signup too, weird thing that logs the last user signed up in the console and in the body comes new one????
  handleLogin() {
    this.authService.loginService(this.auth)
    .subscribe(user => {
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
    })
    this.email = ''
    this.password = ''
  }

  ngOnInit() {
  }

}

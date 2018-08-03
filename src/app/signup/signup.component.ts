import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service'



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hasAccount: boolean = true
  email: string  = ''
  password: string = ''
  auth  = {
    email: '',
    password: ''
  }
  user: string = ''

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  handleSignup() {
    console.log(this.auth)
    this.auth.email = this.email
    this.auth.password = this.password
    this.authService.signupService(this.auth)
    .subscribe(user => {
      this.user = user
      this.router.navigate(['']);
    })
    this.email = ''
    this.password = ''
  }

  handleLogin() {
    this.authService.loginService(this.auth)
    .subscribe(user => {
      this.user = user
      console.log(user)
      localStorage.setItem('user', JSON.stringify(user))
      this.router.navigate(['']);
    })
    this.email = ''
    this.password = ''
  }

  ngOnInit() {
    console.log(this.router);
  }
}


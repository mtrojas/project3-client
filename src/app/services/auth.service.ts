import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = '/'
  //url = 'http://localhost:3000/'

  constructor(private http: Http) { }

  signupService(auth): Observable<string> {
    return this.http.post(this.url + 'signup', auth)
    .pipe(map((res: Response)=> res.json()))
  }

  loginService(auth): Observable<string> {
    return this.http.post(this.url + 'login', auth) //eliminated with credentials
    .pipe(map((res: Response) => res.json()))
 }

  logoutService(){
    localStorage.removeItem('user')
  }

}

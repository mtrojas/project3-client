import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:3000/'
  constructor(private http: Http) { }

  signupService(auth): Observable<string> {
    return this.http.post(this.url + 'signup', auth)
    .pipe(map((res: Response)=> res.json()))
  }
//added not tested
  loginService(auth): Observable<string> {
    return this.http.post(this.url + 'login', auth, {withCredentials:true})
    .pipe(map((res: Response) => res.json()))
 }

  //added not tested
  logoutService(){
    localStorage.removeItem('user')
  }

}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesApiService {
   //url = '/services/'
  url = 'http://localhost:3000/api/phones/'
  constructor(private http: Http) { }

  getAllServices() {
    return this.http.get(this.url)
    .pipe(map((res: Response) => res.json()))
  }

  createService(service) {
    return this.http.post(this.url, service)
    .pipe(map((res: Response) => res.json()))
  }

  getOneService(id) {
    return this.http.get(this.url + id)
    .pipe(map((res: Response) => res.json()))
  }

  editService(service) {
    return this.http.put(this.url + service._id, service)
    .pipe(map((res: Response) => res.json()))
  }

  deleteService(id) {
    return this.http.delete(this.url + id)
    .pipe(map((res: Response) => res.json()))
  }

}

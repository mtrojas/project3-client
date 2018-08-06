import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  //url = '/blog/'
  url = 'http://localhost:3000/blog/'

  constructor(
    private http: Http
  ) { }

  getAllPosts() {
    return this.http.get(this.url).toPromise()
    .then((res: Response)=> res.json())
    .catch(e=>console.log(e))
  }

  createPost(post) {
    return this.http.post(this.url, post)
    .pipe(map((res: Response) => res.json()))
  }

  getOnePost(id) {
    return this.http.get(this.url + id)
    .pipe(map((res: Response) => res.json()))
  }

  editPost(post) {
    return this.http.put(this.url + post._id, post)
    .pipe(map((res: Response) => res.json()))
  }

  deletePost(id) {
    return this.http.delete(this.url + id)
    .pipe(map((res: Response) => res.json()))
  }


}

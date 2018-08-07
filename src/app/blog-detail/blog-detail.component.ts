import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  id: any
  post: any = {}
  user: any;

  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.id = params.id

        this.blogService.getOnePost(this.id)
          .subscribe(post => {
            this.post = post
          })
      })
    this.user =  JSON.parse(localStorage.getItem('user'))
  }

}

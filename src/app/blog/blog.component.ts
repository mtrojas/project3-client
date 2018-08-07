import { Component, OnInit } from '@angular/core';

import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Array<any>

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getAllPosts()
      .then(posts => {
        this.posts = posts;
      })

  }

}

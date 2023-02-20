import { Component, OnInit } from '@angular/core';
import { BlogPostsHelperService } from 'src/app/services/blog-posts-helper.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private blogHelper: BlogPostsHelperService) { }

  ngOnInit(): void {
    this.blogHelper.getPosts().subscribe((data) => {
      console.log(data);
    });
  }

}

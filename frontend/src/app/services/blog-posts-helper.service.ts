import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BlogPostsHelperService {

  constructor(private httpClient: HttpClient) { }
  getPosts() {
    return this.httpClient.get('http://localhost:3000/posts');
  }
}

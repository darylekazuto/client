import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post_i } from './post.interface';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Post_i[]>('http://localhost:3000/post');
  }
}

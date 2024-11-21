import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { PostService } from './post.service';
import { Post_i } from './post.interface';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  constructor(private postService: PostService) { }
  posts: Post_i[] = [];

  ngOnInit() {
    this.postService.getAll().subscribe((data) => {
      this.posts = data;
    });
  }
}

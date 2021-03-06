import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../../services/jsonplaceholder.service'
import { Post } from '../../interfaces/post.interface'

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit{
  title = 'Posts';
  posts: Post[];
  headElements = ['ID', 'Title', 'Body', 'Author'];
  

  constructor(public jsonplaceholderService: JsonPlaceholderService) { }

  ngOnInit(): void {
    this.jsonplaceholderService.getPosts().subscribe(data => {
      this.posts = data;
      //console.log(this.posts[15].body);
    });
  }
}
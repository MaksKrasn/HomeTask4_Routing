import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../../services/jsonplaceholder.service'
import { Post } from '../../interfaces/post.interface'
import { from } from 'rxjs';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit{
  title = 'Posts';
  posts: Post[]
  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];

  constructor(public jsonplaceholderService: JsonPlaceholderService) { }

  ngOnInit(): void {
    this.jsonplaceholderService.getPosts().subscribe(data => {
      this.posts = data;
      console.log(this.posts[15].body);
    });
  }

}
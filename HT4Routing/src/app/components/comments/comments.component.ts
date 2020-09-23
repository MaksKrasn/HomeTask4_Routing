import { Component } from '@angular/core';
import { Comment } from '../../interfaces/comment.interface'
import { JsonPlaceholderService } from 'src/app/services/jsonplaceholder.service';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html'
})
export class CommentsComponent {
  title = 'Comments';
  comments: Comment[];
  headElements = ['ID', 'Post ID', 'Name', 'Email', 'Body'];

  constructor(public jsonPlaceholderService: JsonPlaceholderService){}

  ngOnInit(): void{
    this.jsonPlaceholderService.getComments().subscribe(data => {
      this.comments = data;
      console.log(this.comments)
    })
  }
}
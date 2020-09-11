import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonPlaceholderService } from 'src/app/services/jsonplaceholder.service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html'
})
export class UserInfoComponent implements OnInit{
  title = 'User-info';
  user: User;
  id: number;

  constructor(public jsonplaceholderService: JsonPlaceholderService,
      private activatedRoute: ActivatedRoute) {
        activatedRoute.params.subscribe(prms => {
          this.id = prms['userId'];
        });
  }

  ngOnInit(): void {
    this.jsonplaceholderService.getUsers().subscribe(data => {
      const users: User[] = data;
      this.user = users.filter(us => us.id == this.id)[0];
      console.log(this.user);
    });
  }
}
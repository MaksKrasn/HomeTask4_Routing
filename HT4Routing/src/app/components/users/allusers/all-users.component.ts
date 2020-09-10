import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from 'src/app/services/jsonplaceholder.service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'all-users',
  templateUrl: './all-users.component.html'
})
export class AllUsersComponent implements OnInit{
  title = 'All-Users';
  users: User[];
  headElements = ['ID', 'Name', 'Username', 'Email', 'Address', 'Phone', 'Website', 'Company'];

  constructor(public jsonplaceholderService: JsonPlaceholderService){}

  ngOnInit(): void {
    this.jsonplaceholderService.getUsers().subscribe(data => {
      this.users = data;
      //console.log(this.users[5].company);
    });
  }


}
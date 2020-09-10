import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonPlaceholderService } from 'src/app/services/jsonplaceholder.service';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html'
})
export class UserInfoComponent {
  title = 'User-info';
  //item: Item;
    constructor(private jsonPlaceholderService: JsonPlaceholderService,
        private activatedRoute: ActivatedRoute) {
        activatedRoute.params.subscribe(prms => {
            const id = prms['userId'];
            //this.item = itemsService.getItemById(id);
            console.log(id);
        });
    }
}
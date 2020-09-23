import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/interfaces/photo.interface';
import { JsonPlaceholderService } from 'src/app/services/jsonplaceholder.service';

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html'
})
export class PhotosComponent implements OnInit{
  title = 'Photos';
  photos: Photo[];
  headElements = ['ID', 'Album ID', 'Title', 'URL', 'Image'];

  constructor(public jsonPlaceholderService: JsonPlaceholderService){}

  ngOnInit(): void{
    this.jsonPlaceholderService.getPhotos().subscribe(data => {
      this.photos = data;
      //console.log(this.photos[10]);
    })
  }
}
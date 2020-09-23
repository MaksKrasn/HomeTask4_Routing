import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { JsonPlaceholderService } from '../../services/jsonplaceholder.service'
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from '../users/users.component';
import { AllUsersComponent } from '../users/allusers/all-users.component'
import { UserInfoComponent } from './userinfo/user-info.component';
import { RouterModule } from '@angular/router';
import { PhotosComponent } from '../photos/photos.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserInfoComponent,
    AllUsersComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [JsonPlaceholderService],
  exports: [UserInfoComponent, UsersComponent, AllUsersComponent],
  bootstrap: []
})
export class UsersModule { }

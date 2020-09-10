import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { JsonPlaceholderService } from './services/jsonplaceholder.service'
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './components/posts/posts.component';
import { UserInfoComponent } from './components/users/userinfo/user-info.component';
import { UsersModule } from '../app/components/users/users.module'
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    UsersModule
  ],
  providers: [JsonPlaceholderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

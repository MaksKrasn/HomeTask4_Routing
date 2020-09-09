import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { JsonPlaceholderService } from './services/jsonplaceholder.service'
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './components/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [JsonPlaceholderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

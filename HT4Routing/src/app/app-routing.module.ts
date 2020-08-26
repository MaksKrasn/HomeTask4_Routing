import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component'
import { UsersComponent } from './components/users/users.component'
import { TodosComponent } from './components/todos/todos.component'
import { AlbumsComponent } from './components/albums/albums.component'
import { CommentsComponent } from './components/comments/comments.component'
import { PhotosComponent } from './components/photos/photos.component'
import { AppComponent } from './components/app.component'
import { NotFoundComponent } from './components/notfound/notfound.components'

const routes: Routes = [
  {
    path: "", component: AppComponent
  },
  {
    path: "posts", component: PostsComponent
  },
  {
    path: "users", component: UsersComponent
  },
  {
    path: "todos", component: TodosComponent
  },
  {
    path: "albums", component: AlbumsComponent
  },
  {
    path: "comments", component: CommentsComponent
  },
  {
    path: "photos", component: PhotosComponent
  },
  {
    path: "**", component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

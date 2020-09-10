import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component'
import { UsersComponent } from './components/users/users.component'
import { TodosComponent } from './components/todos/todos.component'
import { AlbumsComponent } from './components/albums/albums.component'
import { CommentsComponent } from './components/comments/comments.component'
import { PhotosComponent } from './components/photos/photos.component'
import { NotFoundComponent } from './components/notfound/notfound.components'
import { UserInfoComponent } from './components/users/userinfo/user-info.component'
import { AllUsersComponent } from './components/users/allusers/all-users.component';

const routes: Routes = [
  {
    path: "", component: PostsComponent
  },
  {
    path: "users", component: UsersComponent, children: [
      {
        path: 'userinfo/:userId', component: UserInfoComponent
      },
      {
        path: 'allusers', component: AllUsersComponent
      }
    ]
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

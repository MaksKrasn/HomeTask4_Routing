import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Post } from '../interfaces/post.interface'
import { User } from '../interfaces/user.interface'
import { Photo } from '../interfaces/photo.interface'
import { Comment } from '../interfaces/comment.interface'

@Injectable()
export class JsonPlaceholderService {
    constructor(private httpClient: HttpClient) {}

    getPosts() : Observable<Post[]>{
        return this.httpClient.get<Post[]>(`${environment.apiUrl}/posts`);
    }

    getUsers() : Observable<User[]>{
        return this.httpClient.get<User[]>(`${environment.apiUrl}/users`);
    }

    getPhotos() : Observable<Photo[]>{
        return this.httpClient.get<Photo[]>(`${environment.apiUrl}/photos`);
    }

    getComments() : Observable<Comment[]>{
        return this.httpClient.get<Comment[]>(`${environment.apiUrl}/comments`);
    }
}
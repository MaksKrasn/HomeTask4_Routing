import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Post } from '../interfaces/post.interface'
import { User } from '../interfaces/user.interface'

@Injectable()
export class JsonPlaceholderService {
    constructor(private httpClient: HttpClient) {}

    getPosts() : Observable<Post[]>{
        return this.httpClient.get<Post[]>(`${environment.apiUrl}/posts`);
    }

    getUsers() : Observable<User[]>{
        return this.httpClient.get<User[]>(`${environment.apiUrl}/users`);
    }

    /*getUserById(id: number): User {
        let users: User[];
        this.getUsers().subscribe(data => {
            users = data;
        })
        return users.filter(us => us.id == id)[0];
    }*/
}
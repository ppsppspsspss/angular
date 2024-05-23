import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../types/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:5183/api/post/";

  post(post: any){
    return this.http.post(this.baseUrl + "create-post", post, {
      headers: {
        'Content-Type': 'application/json'
    }
    });
  }

  getAllPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl, {
      headers: {
        'Content-Type': 'application/json'
    }
    });
  }

  deletePost(postID: number){
    return this.http.delete(this.baseUrl + 'delete/' + postID, {
      headers: {
        'Content-Type': 'application/json'
    }
    });
  }
  
}

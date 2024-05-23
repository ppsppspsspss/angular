import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { timestamp } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userID: number | null = null;
  username: string | null = null;
  role: string | null = null;
  profilePicture: string | null = null;
  posts: any[] = [];
  status = false;
  postStatus = false;

  constructor(private authService: AuthService, private postService: PostService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      if (user) {
        this.userID = user.userID;
        this.username = user.username;
        this.role = user.role;
        this.profilePicture = user.profilePicture;
        this.loadPosts();
      }
    });
  }

  postForm = new FormGroup({
    post: new FormControl("", [Validators.required]),
  })

  get PostContent(){
    return this.postForm.get("post") as FormControl
  }

  loadPosts(): void {
    this.postService.getAllPosts().subscribe(
      (data: Post[]) => { 
        this.posts = data;
        this.postStatus = false;
      },
      (error) => {
        this.postStatus = true;
      }
    );
  }

  handleSubmit(){

    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      weekday: 'long', 
      month: 'long',   
      day: 'numeric',  
      year: 'numeric', 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true     
    }).format(date);

    const post = {
      userID: this.userID,
      postContent: this.postForm.value.post,
      timestamp: formattedDate
    }

    this.postService.post(post).subscribe(
      (res) => {
        this.postForm.reset();
        this.loadPosts();
        this.status = false;
      },
      (error) => {
        this.status = true;
      }
    )
    
  }

  deletePost(postID: number){
    this.postService.deletePost(postID).subscribe(
      (res) => {
        this.loadPosts();
      },
      (error) => {
      }
    )
  }

  logOut(){
    this.authService.logOut();
  }

}

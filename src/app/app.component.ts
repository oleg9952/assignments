import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from './Services/posts.service';
import { Post } from './Services/post.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private dataSub: Subscription;

  form: FormGroup;
  posts: Post[] = [];
  isLoading = true;
  error = '';

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.postsService.getPosts();
    this.dataSub = this.postsService.dataSubject.subscribe(
      (data: Array<Post>) => {
        this.error = '';
        this.isLoading = false;
        this.posts = data;
      },
      (error) => {
        this.isLoading = false;
        this.error = error.message;
      }
    )
  }

  initForm(): void {
    this.form = new FormGroup({
      postTitle: new FormControl(null, Validators.required),
      postMessage: new FormControl(null, Validators.required)
    })
  }

  onSubmit(): void {
    this.isLoading = true;
    this.postsService.addPost({
      title: this.form.value['postTitle'],
      message: this.form.value['postMessage']
    })
    this.form.reset();
  }

  onDelete(): void {
    this.isLoading = true;
    this.postsService.deletePosts();
  }

}
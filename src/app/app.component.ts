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
  posts: Post[];

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.postsService.getPosts();
    this.dataSub = this.postsService.dataSubject.subscribe(data => {
      this.posts = data;
    })
  }

  initForm(): void {
    this.form = new FormGroup({
      postTitle: new FormControl(null, Validators.required),
      postMessage: new FormControl(null, Validators.required)
    })
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.postsService.addPost({
      title: this.form.value['postTitle'],
      message: this.form.value['postMessage']
    })
    this.form.reset();
  }

  onDelete(): void {
    this.postsService.getPosts();
  }

}
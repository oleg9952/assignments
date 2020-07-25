import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.interface';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  dataSubject: Subject<Array<Post>> = new Subject();

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): void {
    this.http.get('https://task-13-f84df.firebaseio.com/posts.json')
      .pipe(
        map((resp: any) => {
          const posts: Array<Post> = [];
          for(const key in resp) {
            if (resp.hasOwnProperty(key)) {
              posts.push({
                ...resp[key],
                id: key
              })
            }
          }
          return posts
        })
      )
      .subscribe(posts => this.dataSubject.next(posts))
  }

  addPost(post: Post): void {
    this.http.post('https://task-13-f84df.firebaseio.com/posts.json', post).subscribe(
      () => this.getPosts(),
      error => console.log(`Failed:`, error)
    );
  }

  deletePosts(): void {
    this.http.delete('https://task-13-f84df.firebaseio.com/posts.json')
      .subscribe(
        () => this.getPosts(),
        error => console.log(error)
      )
  }
}

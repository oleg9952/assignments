import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  sub: any;
  message: string = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe((params: Params) => {
      if (!params.message) return;
      this.message = params.message;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}

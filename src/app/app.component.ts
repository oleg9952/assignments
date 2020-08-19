import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './Services/shopping.service';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.autoSignOut();
  }

}

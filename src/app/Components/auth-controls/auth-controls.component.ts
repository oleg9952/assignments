import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-auth-controls',
  templateUrl: './auth-controls.component.html',
  styleUrls: ['./auth-controls.component.scss']
})
export class AuthControlsComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}

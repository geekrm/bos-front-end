import { environment } from '../environments/environment';
import { SigninService } from './services/signin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  username = '';
  role = '';
  
  constructor(private signInService: SigninService) {}
  
  ngOnInit(): void {
    if (this.isLoggedIn()) {
      this.username = localStorage.getItem('username');
      this.role = localStorage.getItem('role');
    } else {
      this.username = '';
      this.role = '';
    }
  }

  
  get storageToken(): any {
    return localStorage.getItem('token');
  }
  
  public isLoggedIn(): boolean {
    return this.signInService.isLoggedIn();
  }
  
}

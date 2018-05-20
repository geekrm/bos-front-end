import { environment } from '../environments/environment';
import { SigninService } from './services/signin.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private signInService: SigninService, private router: Router) {}
  
  get storageToken(): any {
    return localStorage.getItem('token');
  }
  
  public signOut() {
    this.signInService.signOut();
    this.router.navigate(['/login']);
  }
  
  public isLoggedIn(): boolean {
    return this.signInService.isLoggedIn();
  }
  
}

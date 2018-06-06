import { environment } from '../../../environments/environment';
import { AuthorizationData } from '../../models/authorizationdata';
import { User } from '../../models/user';
import { SigninService } from '../../services/signin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token = '';
  role = 'none';
  user = new User(-1, '', '');
  API_URL = environment.apiUrl;
  alertHidden = true;
  
  constructor(private signInService: SigninService, private router: Router) { }

  ngOnInit() {
  }

  signIn() {

    this.signInService.signIn(this.user)
      .subscribe(data => this.setCurrentAuthData(data));

  }
  
  private setCurrentAuthData(data: AuthorizationData) {
    
    if (data == null) {
      this.alertHidden = false;
      return;
    }
    
    this.alertHidden = true;
    this.token = data.token;
    this.role = data.role;
    localStorage.setItem('token', data.token);
    localStorage.setItem('role', data.role);
    localStorage.setItem('username', this.user.username);
    
    this.router.navigate(['/panel']);
  }

}

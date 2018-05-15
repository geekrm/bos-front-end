import { environment } from '../../../environments/environment';
import { AuthorizationData } from '../../models/authorizationdata';
import { User } from '../../models/user';
import { SigninService } from '../../services/signin.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(private signInService: SigninService) { }

  ngOnInit() {
  }

  signIn() {

    this.signInService.signIn(this.user)
      .subscribe(data => this.setCurrentAuthData(data));

  }
  
  private setCurrentAuthData(data: AuthorizationData) {
    this.token = data.token;
    this.role = data.role;
    localStorage.setItem('token', data.token);
    localStorage.setItem('role', data.role);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.user); }

}

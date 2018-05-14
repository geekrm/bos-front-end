import { environment } from '../../../environments/environment';
import { User } from '../../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User(-1, '', '');
  API_URL = environment.apiUrl;

  constructor() { }

  ngOnInit() {
  }

  signIn() {
    this.user.login = 'signedIN';
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.user); }

}

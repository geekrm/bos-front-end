import { environment } from '../../environments/environment';
import { AuthorizationData } from '../models/authorizationdata';
import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators/catchError';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

@Injectable()
export class SigninService {

  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public isLoggedIn(): boolean {
    const token: string = localStorage.getItem('token');
    return token != null;
  }
  
  public signIn(user: User): Observable<AuthorizationData> {
    return this.http.post<AuthorizationData>(this.API_URL + 'account/login', user)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log('error: ' + error.status + ' -+- ' + JSON.stringify(error));
          return Observable.of<AuthorizationData>(null);
        })
      );
  }
  
  public signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
  }

}

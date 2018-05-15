import { environment } from '../../environments/environment';
import { AuthorizationData } from '../models/authorizationdata';
import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class SigninService {

  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public signIn(user: User): Observable<AuthorizationData> {
    return this.http.post<AuthorizationData>(this.API_URL + 'account/login', user)
      .pipe();
  }

}

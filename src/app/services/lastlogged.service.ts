import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { LastLoggedInfo } from '../models/lastloggedinfo';
import { UserLastLogged } from '../models/userlastlogged';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators/catchError';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

@Injectable()
export class LastloggedService {

  API_URL = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  public getMyLastLoggedInfo(): Observable<LastLoggedInfo> {
    return this.http.get<LastLoggedInfo>(this.API_URL + 'resource/lastlogged', {headers: this.getHeaders()})
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.router.navigate(['/login']);
          console.log('error: ' + error.status + ' -+- ' + JSON.stringify(error));
          return Observable.of<LastLoggedInfo>(null);
        })
      );
  }
  
  public getAllLastLoggedInfo(): Observable<Array<UserLastLogged>> {
    return this.http.get<Array<UserLastLogged>>(this.API_URL + 'resource/all', {headers: this.getHeaders()})
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.router.navigate(['/login']);
          console.log('error: ' + error.status + ' -+- ' + JSON.stringify(error));
          return Observable.of<Array<UserLastLogged>>(null);
        })
      );
  }
  
  private getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }
  
  

}

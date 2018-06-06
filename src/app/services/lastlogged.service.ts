import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { LastLoggedInfo } from '../models/lastloggedinfo';
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
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<LastLoggedInfo>(this.API_URL + 'resource/lastlogged', {headers: headers})
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.router.navigate(['/login']);
          console.log('error: ' + error.status + ' -+- ' + JSON.stringify(error));
          return Observable.of<LastLoggedInfo>(null);
        })
      );
  }

}

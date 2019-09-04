import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient, private router: Router) { }

  uri = "http://localhost:5000";

  public postData(url: string, data: any) {
    
    return this._http.post(this.uri + url, data).pipe(
     map(response => {
       return response;
     }),

     catchError(this.handleAuthError)
    )
  }

  public getData(url: string) {
    return this._http.get(this.uri + url).pipe(
      map(response => {
        return response;
      }),

      catchError(this.handleError)
    )
  }

  public post(url: string, data: any) {
    
    return this._http.post(this.uri + url, data).pipe(
     map(response => {
       return response;
     }),

     catchError(this.handleError)
    )
  }
  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    //handle your auth error or rethrow
    if (err.status === 401) {
  
      localStorage.clear();
      this.router.navigate([`/login`]);
      return of(err);
    } else if(err.status === 400) {
      localStorage.clear();
      err.error['newmessage'] = "Username or password is incorrect";
      return of(err);
    }
    
    else {
      // err.error['newmessage'] = "Somthing went worng";
      // //this.router.navigate([`/login`]);
      // return of(err.error['newmessage'] );

      return of(err);
    }
    //throw Error;

   // return throwError('something went wrong');

  }

  private handleError(err: HttpErrorResponse): Observable<any> {
    return of(err);
  }
}

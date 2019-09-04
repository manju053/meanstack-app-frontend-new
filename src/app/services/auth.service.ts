import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated: boolean = false;
  public userRole: string;
  constructor(private apiService: ApiService) { }

  path = '/users';
  login(loginDetails) {
    const loginPath = this.path + '/authenticate';
    return this.apiService.postData(loginPath, loginDetails);
  }

  getAuthorizationToken() {
    return localStorage.getItem('authToken');
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginData =  new Login();
  loginError;
  constructor(private _fb: FormBuilder, private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this._auth.login(this.loginForm.value).subscribe(
      response => {
      // console.log("type of response", response instanceof HttpErrorResponse);
      console.log("login response:", response);
       if(!(response instanceof HttpErrorResponse)) {
        localStorage.setItem('authToken', response.token);
        this._auth.isAuthenticated = true;
        this._auth.userRole = response.role;
        if(response.role === 'admin') {
          this._router.navigate(['/users']);
        } else {
        this._router.navigate(['/list']);
        }
       } else {
         this.loginError = response.error.message;
         this._router.navigate(['/login']);
       }
        
      }
    )
  }
}

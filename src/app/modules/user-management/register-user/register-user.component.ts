import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage = '';
  hideForm: boolean = false;
  constructor(private _fb: FormBuilder, private _apiService: ApiService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['', Validators.required]
    })
  }

  register() {
    let usrObj = this.loginForm.value;
    usrObj.password = this.loginForm.get('username').value;
    let path = '/users/register';
    this._apiService.post(path, usrObj).subscribe(
      response => {
        if(response instanceof HttpErrorResponse) {
          this.errorMessage = response.error.message;
        } else {
          this.errorMessage = 'User registered successfully';
          this.hideForm = true;
        }
      }
    )
  }

  formReset() {
    console.log("reset");
    this.hideForm = false;
    this.errorMessage = '';
    this.loginForm.reset();
  }
}

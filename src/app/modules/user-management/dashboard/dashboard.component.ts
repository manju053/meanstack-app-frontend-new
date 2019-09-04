import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: any;
  errorMessage = '';
  filterStatus;
  constructor(private _userService: UsersService) { }

  ngOnInit() {
    this._userService.getAll().subscribe(
      response => {
        if(response instanceof HttpErrorResponse) {
          this.errorMessage = 'Something went wrong';
        } else {
          this.users = response;
        }
      }
    )
  }

  registerUser() {

  }
}

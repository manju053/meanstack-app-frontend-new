import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private _apiService: ApiService) { }

  getAll() {
    let path = "/users";
    return this._apiService.getData(path);
  }
}

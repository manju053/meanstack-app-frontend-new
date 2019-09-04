import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd, NavigationError } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-new';
  loading: boolean;
  constructor(private router: Router, private _auth: AuthService) {
    this.router.events.subscribe(event => {
      switch(true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationCancel:
        case event instanceof NavigationEnd:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        
      }
    })
  }

  ngOnInit() {
   //if(this._auth.getAuthorizationToken()) this.isAuthenticated = true;
  }

  logout() {
    localStorage.removeItem('authToken');
    this._auth.isAuthenticated = false;
    this.router.navigate(['/login']);
  }
}

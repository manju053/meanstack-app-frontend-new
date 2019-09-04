import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IssueService } from './issue.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListResolverService implements Resolve<any> {

  constructor(private issueService: IssueService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this.issueService.getAllIssues();

  }
}

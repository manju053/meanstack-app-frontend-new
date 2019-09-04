import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {



  uri = "http://localhost:5000";
  constructor(private http: HttpClient) { }

  getAllIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

  getIssueById(issueId) {
    return this.http.get(`${this.uri}/issues/${issueId}`);
  }

  addIssue(issue) {
    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  updateIssue(issue) {
    return this.http.post(`${this.uri}/issues/update/${issue._id}`, issue);
  }

  deleteIssue(issue) {
   // console.log("issue to be deleted:", issue);
    return this.http.get(`${this.uri}/issues/delete/${issue}`);
  }
}

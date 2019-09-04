import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/models/issue.model';
import { IssueService } from 'src/app/issue.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  issues: Issue[];
  displayColumns = ['title', 'responsible', 'severity', 'status', 'actions'];
  filterStatus = 'All';
  constructor(private issueService: IssueService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //this.fetchIssues();
    this.route.data.subscribe((data: Issue[]) => {
      this.issues = data;
      console.log("issues:", this.issues);
    })
  }

  fetchIssues() {
    this.issueService.getAllIssues().subscribe((resp: Issue[]) => {
      this.issues = resp;
      console.log("issues:", this.issues);
    })
  } 

  addIssue() {
    this.router.navigate(['/create']);
  }

  editIssue(issue) {
    this.router.navigate([`/edit/${issue._id}`]);
  }

  deleteIssue(issue) {
    this.issueService.deleteIssue(issue._id).subscribe(
      resp => {
        this.fetchIssues();
      }
    )
  }

}

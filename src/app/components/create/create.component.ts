import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/models/issue.model';
import { IssueService } from 'src/app/issue.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  inProgress = "In Progress";
  open = "Open";
  closed = "Closed";
  issue: Issue = {
    title: '',
    description: '',
    responsible: '',
    severity: '',
    status: 'Open'
  };
  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
   
  }

  createIssue() {
    this.issueService.addIssue(this.issue).subscribe(
      resp => {
        this.router.navigate(['/list']);
      }
    )

  }

  cancelCreate() {
    this.router.navigate(['/list']);
  }
}

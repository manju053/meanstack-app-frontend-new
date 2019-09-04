import { Component, OnInit } from '@angular/core';
import { IssueService } from 'src/app/issue.service';
import { Issue } from 'src/app/models/issue.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  
  issue: Issue = {
    title: '',
    description: '',
    responsible: '',
    severity: '',
    status: 'Open'
  };

  inProgress = "In Progress";
  open = "Open";
  closed = "Closed";
  constructor(private issueService: IssueService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.issueService.getIssueById(params.id).subscribe(
        (data: Issue) => {
          this.issue = data;
        }
      )
    })

  }

  updateIssue() {
    this.issueService.updateIssue(this.issue).subscribe(
      resp => {
        this.router.navigate(['/list']);
      }
    )
  }

  cancelUpdate() {
    this.router.navigate(['/list']);
  }


}

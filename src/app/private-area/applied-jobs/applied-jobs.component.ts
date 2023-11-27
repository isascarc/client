import { Component, OnInit } from '@angular/core';
import { Applicant } from 'src/app/_models/applicant';
import { Job } from 'src/app/_modules/job';
import { ApplicantsService } from 'src/app/_services/applicants.service';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {

  constructor(public applicantsService: ApplicantsService) { }
  jobs: Job[] = [];
  applicants: Applicant[] = [];

  ngOnInit(): void {
    this.loadAppsWithJobs();
  }

  loadAppsWithJobs(): void {
    this.applicantsService.getMyApplicant()
      .subscribe({
        next: response => {
          this.applicants = response[0];
          this.jobs = response[1];
          console.log(response)
        }
      });
  }
}
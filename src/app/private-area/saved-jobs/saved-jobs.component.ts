import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/_modules/job';
import { JobsService } from 'src/app/_services/jobs.service';

@Component({
  selector: 'app-saved-jobs',
  templateUrl: './saved-jobs.component.html',
  styleUrls: ['./saved-jobs.component.css']
})
export class SavedJobsComponent implements OnInit {

  constructor( public JobsService: JobsService) { }
  jobs: Job[] = [];
  
  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
     this.JobsService.getMySavedJobs()
      .subscribe({
        next: response => {
          this.jobs = response;
          console.log(response);
        }
      });
  }
}

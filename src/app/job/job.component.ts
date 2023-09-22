import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../_modules/job';
import { AccountService } from '../_services/account.service';
import { JobsComponent } from '../jobs/jobs.component';
import { JobsService } from '../_services/jobs.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  @Input() jobData!: Job;
  constructor(private accountService: AccountService,private jobService: JobsService) { }

  ngOnInit(): void {
  }

  addToFivorate(jobId:number) {// ToDO
    this.jobService.saveJob(jobId).subscribe({
      next: x => console.log(x)
    })
  }
  sendEmail(jobId:number) {
    this.accountService.sendJobInEmail(jobId, '').subscribe({
      next: x => console.log(x)
    })
  }
}

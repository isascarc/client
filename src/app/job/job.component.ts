import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../_modules/job';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  @Input() jobData!: Job;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }
  sendEmail(jobId:number) {
    this.accountService.sendJobInEmail(jobId, '').subscribe({
      next: x => console.log(x)
    })
  }
}

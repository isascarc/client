import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Job } from '../_modules/job';
import { AccountService } from '../_services/account.service';
import { JobsService } from '../_services/jobs.service';
import { ApplicantsService } from '../_services/applicants.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  @Input() jobData!: Job;
  constructor(private accountService: AccountService, private jobService: JobsService,
     private applicantsService:ApplicantsService, private toastr: ToastrService) { }

  ngOnInit(): void { }

  rotateFivorate(status: boolean, jobId: number) {
    if (!status) {
      this.jobService.saveJob(jobId).subscribe({
        next: x => {
          this.toastr.success('המשרה נשמרה');
          this.jobData.isSaved = true
        }
      })
    } else {
      this.jobService.undoSaveJob(jobId).subscribe({
        next: x => {
          this.toastr.success('המשרה הוסרה');
          this.jobData.isSaved = false
        }
      })
    }
  }

  sendEmail(jobId: number) {
    this.accountService.sendJobInEmail(jobId, '').subscribe({
      next: x => console.log(x)
    })
  }
  
  createApplicant(jobId: number) {
    this.applicantsService.createApplicant(jobId).subscribe({
      next: x => this.toastr.success('מועמדותך הוגשה בהצלחה') 
    })
  }
}
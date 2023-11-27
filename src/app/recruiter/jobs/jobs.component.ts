import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { Job } from 'src/app/_modules/job';
import { ApplicantsService } from 'src/app/_services/applicants.service';
import { JobsService } from 'src/app/_services/jobs.service';

@Component({
  selector: 'app-jobs-rec',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsManagerComponent implements OnInit {

  physicianInfoForm: FormGroup =new FormGroup({}); ;
    physicians: {k: number, v: string}[] = [{k:0,v:'str1'},{k:1,v:'str2'},{k:2,v:'str3'}];
   

    
  constructor(private fb: FormBuilder, public jobsService: JobsService) { }
  jobs: Job[] = [];
  registerMode = false;
  showAllJobs = false;

  ngOnInit(): void {
    this.loadAppsWithJobs();
    this.initializeForm();

    this.physicianInfoForm = this.fb.group({
      firstname: [''],
      lastname: [''],
    });
  }

  setFormData($event: MatAutocompleteSelectedEvent) {
    console.log(99);
    let physician = $event.option.value;
    if(physician){
        this.physicianInfoForm.controls['firstname'].setValue('physician.firstName', {emitEvent: false});
        this.physicianInfoForm.controls['lastname'].setValue('physician.lastName', {emitEvent: false});
    }
    console.log(physician);
}
  initializeForm() {
  }

  CreateJobToggle() {
    this.registerMode = !this.registerMode;
    this.showAllJobs = false;
  }

  showAllJobsToggle() {
    this.showAllJobs = !this.showAllJobs;
    this.registerMode = false;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

  loadAppsWithJobs(): void {
    this.jobsService.getJobsICreated()
      .subscribe({
        next: response => {
          this.jobs = response;
        }
      });
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { JobsService } from '../_services/jobs.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Job } from '../_modules/job';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchForm: FormGroup = new FormGroup({});
  addonData: any | undefined;

  constructor(private fb: FormBuilder, public jobsService: JobsService, private _snackBar: MatSnackBar) { }

  autoTicks = false;
  includeWithoutSalry = false;
  haveToar = false;
  haveEnglish = false;

  max = 50;
  min = 8;
  step = 2;
  value = 10;

  professions: string[] = ['מפתח תוכנה', 'test'];
  toppingList: string[] = [
    'Java',
    'Net.',
    'Node.js',
    'Python',

    'Angular',
    'React',

    'Big Data',
    'Mobile',
    'BI',
    'Cobol',
    'Natural',
    'PL-SQL',
    'SharePoint',
    'ר"צ פיתוח',
    'GIS',
    '++C/C',
    'חומרה',];

  jobs: Job[] = [];
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.searchForm = this.fb.group({
      salry: [''],
      withoutSalry: [''],
      haveEnglish: [''],
      profession: [''],
      toppings: [''],
      haveToar: [''],
    });
  }

  onSubmit() {
    const values = this.searchForm.value;
    console.log(values);

    this.jobsService.searchJobs(values)
      .subscribe({
        next: response => {
          this.jobs = response;
          console.log(response);
        }
      });
  }
}
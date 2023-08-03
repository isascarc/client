import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { JobsService } from './_services/jobs.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  searchForm: FormGroup = new FormGroup({});
  addonData: any | undefined;


  constructor(private fb: FormBuilder, public jobsService: JobsService, private _snackBar: MatSnackBar) { }


  autoTicks = false;
  includeWithoutSalry = false;
  haveToar = false;

  max = 50;
  min = 8;
  step = 2;
  value = 12;

  toppings = new FormControl('');

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
    'T-SQL',
    'חומרה',];

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.searchForm = this.fb.group({
      salary: [''],
      withoutSalry: [''],
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
          console.log(response);
          //     console.log( response['activeInstallCount']);
          //     this.addonData = response;
          //     console.log(  this.addonData['activeInstallCount']);
        }
      });
  }
}
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobsService } from '../_services/jobs.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Job } from '../_modules/job';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchForm: FormGroup = new FormGroup({});
  addonData: any | undefined;

  constructor(private fb: FormBuilder, public jobsService: JobsService, private _snackBar: MatSnackBar) { }

  areasList: Map<number, string> = new Map<number, string>();
  toppingList: Map<number, string> = new Map<number, string>();





  autoTicks = false;
  includeWithoutSalry = false;
  haveToar = false;
  haveEnglish = false;

  max = 50;
  min = 8;
  step = 2;
  value = 10;

  professions: string[] = ['מפתח תוכנה', 'test'];
  // toppingList: string[] = [
  //   'Java',
  //   'Net.',
  //   'Node.js',
  //   'Python',

  //   'Angular',
  //   'React',

  //   'Big Data',
  //   'Mobile',
  //   'BI',
  //   'Cobol',
  //   'Natural',
  //   'PL-SQL',
  //   'SharePoint',
  //   'ר"צ פיתוח',
  //   'GIS',
  //   '++C/C',
  //   'חומרה',];

  jobs: Job[] = [];

  
  ngOnInit(): void {
    this.initializeForm();
    this.loadAreas();
  }

  initializeForm() {
    this.searchForm = this.fb.group({
      salry: [''],
      withoutSalry: [''],
      haveEnglish: [''],
      profession: [''],
      toppings: [''],
      haveToar: [''],
      area: 1,
    });
  }

  loadAreas(){
    this.jobsService.loadAreas().subscribe(x => {
      let parsedObject = JSON.parse(JSON.stringify(x));

      for (const key in parsedObject) {
        if (parsedObject.hasOwnProperty(key)) {
          const numericKey = parseInt(key, 10); // Convert the key to a number
          this.areasList.set(numericKey, parsedObject[key]);
        }
      }
      console.log(this.areasList);
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
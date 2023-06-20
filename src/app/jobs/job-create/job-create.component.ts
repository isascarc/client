import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExtensionsService } from 'src/app/_services/jobs.service';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css']
})
export class JobCreateComponent implements OnInit {
  @Output() cancelCreate = new EventEmitter();

  isInputEnabled = false;

  searchForm: FormGroup = new FormGroup({});
  addonData: any | undefined;

  constructor(private fb: FormBuilder, private jobService: ExtensionsService) { }

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
      area: [''],
      other: [''],
    });
  }

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

  areasList: string[] = ['צפון', 'שפלה', 'מרכז', 'דרום', 'יהודה ושומרון', 'ירושלים'];


  cancel() {
    this.cancelCreate.emit(false);
  }
  onSubmit() {
    // Handle the form submission logic here
    console.log('Form submitted!');
  }

  createJob() {
    console.log(9);
     this.jobService.createJob(this.searchForm?.value).subscribe({
       next: _ => {
         console.log('הפרופיל עודכן בהצלחה');
         this.searchForm?.reset();
       }
     })
  }
}

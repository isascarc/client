import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { JobsService } from 'src/app/_services/jobs.service';
 
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

  constructor(private fb: FormBuilder, private jobService: JobsService,  private toaster:ToastrService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.searchForm = this.fb.group({
      salary: [0],
      withoutSalry: [''],
      haveEnglish: [true],
      profession: [''],
      toppings: [''],
      haveToar: [false],
      area: [''],
      other: [''],
      jobDetails:''
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

  createJob() {
    console.log(this.searchForm?.value)
     this.jobService.createJob(this.searchForm?.value).subscribe({
       next: _ => {
        this.toaster.success('המשרה נוצרה בהצלחה');
         //this.searchForm?.reset();
       },
       error: _=>{
        this.toaster.error('נראה שהתרחשה תקלה. נסה שנית');
       }
     })
  }
}

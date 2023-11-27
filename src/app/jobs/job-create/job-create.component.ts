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

  constructor(private fb: FormBuilder, private jobService: JobsService, private toaster: ToastrService) { }

  areasList: Map<number, string> = new Map<number, string>();
  toppingList: Map<number, string> = new Map<number, string>();

  ngOnInit(): void {
    this.initializeForm();
    this.loadAreas();

    this.areasList.set(1, "ירושלים");
    this.areasList.set(2, "מרכז");
    this.areasList.set(3, "יהודה ושומרון");
    this.areasList.set(4, "צפון");
    this.areasList.set(5, "שפלה");
    this.areasList.set(6, "דרום");



    this.toppingList.set(1, "Java");
    this.toppingList.set(2, ".Net");
    this.toppingList.set(3, "Node.js");
    this.toppingList.set(4, "Python");

  }

  initializeForm() {
    this.searchForm = this.fb.group({
      salary: [0],
      haveEnglish: [true],
      withoutSalry: [''],
      profession: 'e',
      toppings: [''],
      haveToar: [false],
      text: '',
      area: 0,
      other: [''],
    });
  }
  
  loadAreas(){
    this.jobService.loadAreas().subscribe(x => {
      let parsedObject = JSON.parse(JSON.stringify(x));

      for (const key in x) {
        if (parsedObject.hasOwnProperty(key)) {
          const numericKey = parseInt(key, 10); // Convert the key to a number
          this.areasList.set(numericKey, parsedObject[key]);
        }
      }
      console.log(this.areasList);
    });
  }

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
      error: _ => {
        this.toaster.error('נראה שהתרחשה תקלה. נסה שנית');
      }
    })
  }
}

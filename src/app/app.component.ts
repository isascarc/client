import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { JobsService } from './_services/jobs.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  searchForm: FormGroup = new FormGroup({});
  addonData: any | undefined;


  constructor(private fb: FormBuilder, private accounService: AccountService, public jobsService: JobsService, private _snackBar: MatSnackBar) { }


  autoTicks = false;
  includeWithoutSalry = false;
  haveToar = false;

  max = 50;
  min = 8;
  step = 2;
  value = 12;

  toppings = new FormControl('');


  ngOnInit(): void { 
    this.setCorrectuser();
  }


  setCorrectuser() {
    const userString = localStorage.getItem('user');
    if (!userString)
      return;
    const user: User = JSON.parse(userString);
    this.accounService.setCurrentUser(user);
  }   
}
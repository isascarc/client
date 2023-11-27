import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Member } from 'src/app/_models/member';
import { AccountService } from 'src/app/_services/account.service';
import { JobsService } from 'src/app/_services/jobs.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {


  searchForm: FormGroup = new FormGroup({});
  addonData: any | undefined;

  user: Member | undefined;

  constructor(private fb: FormBuilder, public jobsService: JobsService, private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.accountService.getUserData().subscribe({
      next: x => {
        console.log(x);

        this.user = x
      }
    });
    this.initializeForm();
  }

  initializeForm() {
    this.searchForm = this.fb.group({
      Mail: [''],
      UserName: [''],
      phone: [''],
      city: [''],
      LinkedinLink: [''],
      websiteLink: [''],
      showMe: true,
    });
  }

  onSubmit() {
    this.accountService.setUserData(this.searchForm.value)
      .subscribe({
        next: response => {
          this.toastr.success('הנתונים עודכנו בהצלחה!');
        }
      });
  }
}
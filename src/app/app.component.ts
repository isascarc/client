import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExtensionsService } from './_services/extensions.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  addonData:any|undefined;
  constructor(private fb: FormBuilder, public extensionsService: ExtensionsService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      crxId: ['eeagobfjdenkkddmbclomhiblgggliao']
    });
  }

  onSubmit() {
    const values = this.registerForm.value;
    console.log(values);
    this.extensionsService.getExtById(values.crxId).subscribe({
      next: response => {
        console.log(response);
        console.log( response['activeInstallCount']);
       
        this.addonData = response;
        console.log(  this.addonData['activeInstallCount']);
      }
    });
  }
}


import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


import { MatNativeDateModule } from '@angular/material/core';
import { SelectInputComponent } from './_forms/select-input/select-input.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobComponent } from './job/job.component';
import { Routes } from '@angular/router';
import { JobCreateComponent } from './jobs/job-create/job-create.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    SelectInputComponent,
    SearchComponent,
    NavbarComponent,
    AdminComponent,
    JobsComponent,
    JobComponent,
    JobCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,

    MatChipsModule,
    BrowserAnimationsModule,

    MatSliderModule,
    MatSlideToggleModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,

    ReactiveFormsModule,
    MatExpansionModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    NgxSliderModule,
    MatSnackBarModule,

    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

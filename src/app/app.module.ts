import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import {MatDividerModule} from '@angular/material/divider';


import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
 

import { ToastrModule  } from 'ngx-toastr';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { LoadingInterceptor } from './_interceptors/loading.interceptor';

import { AppliedJobsComponent } from './private-area/applied-jobs/applied-jobs.component';
import { SavedJobsComponent } from './private-area/saved-jobs/saved-jobs.component';
import { SettingsComponent } from './private-area/settings/settings.component';
import { CvsComponent } from './private-area/cvs/cvs.component';
import { PrivateAreaComponent } from './private-area/private-area/private-area.component';

import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';

// 


@NgModule({
  declarations: [
    AppComponent,
    SelectInputComponent,
    SearchComponent,
    NavbarComponent,
    AdminComponent,
    JobsComponent,
    JobComponent,
    JobCreateComponent,
    SelectInputComponent,
    TextInputComponent,
    RegisterComponent,
    
    AppliedJobsComponent,
    SavedJobsComponent,
    SettingsComponent,
    CvsComponent,
    PrivateAreaComponent,
    
    AdminLoginComponent,
         HomeComponent,
         
    
    

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,

    MatDividerModule,
    
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
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    NgxSliderModule,
    MatSnackBarModule,

    MatIconModule,
    MatMenuModule,

    MatButtonModule,
    MatDialogModule,

    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    }),
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: ErrorInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS, useClass: LoadingInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS, useClass: JwtInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


//oy2gcwyrdngey5sppxvag46ycpz2cfaute3ftawtivg43i
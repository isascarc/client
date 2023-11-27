import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
import { AppliedJobsComponent } from './private-area/applied-jobs/applied-jobs.component';
import { CvsComponent } from './private-area/cvs/cvs.component';
import { SettingsComponent } from './private-area/settings/settings.component';
import { SavedJobsComponent } from './private-area/saved-jobs/saved-jobs.component';
import { PrivateAreaComponent } from './private-area/private-area/private-area.component';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { RecruiterAreaComponent } from './recruiter/private-area/private-area.component';
import { JobsManagerComponent } from './recruiter/jobs/jobs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    //runGuardsAndResolvers: 'always',    
    canActivate: [AuthGuard],
    children: [
      // Visible to all
      { path: 'search', component: SearchComponent },
      { path: 'register', component: RegisterComponent },

      // User area
      { path: 'privateArea/private-area', component: PrivateAreaComponent },
      { path: 'privateArea/cvs', component: CvsComponent },
      { path: 'privateArea/AppliedJobs', component: AppliedJobsComponent },
      { path: 'privateArea/savedJobs', component: SavedJobsComponent },
      { path: 'privateArea/settings', component: SettingsComponent },
      
      // Recruiter area
      { path: 'recruiter/private-area', component: RecruiterAreaComponent },
      { path: 'recruiter/jobs', component: JobsManagerComponent },

      // Admin area - Todo..

      // { path: 'member/edit', component: MemberEditComponent, canDeactivate:[PreventUnsaveChangesGuard] },
    ]
  },
  { path: '**', component: RegisterComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
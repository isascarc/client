import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
//import { CVsComponent } from './private-area/private-area.component';
import { AppliedJobsComponent } from './private-area/applied-jobs/applied-jobs.component';
import { CvsComponent } from './private-area/cvs/cvs.component';
import { SettingsComponent } from './private-area/settings/settings.component';
import { SavedJobsComponent } from './private-area/saved-jobs/saved-jobs.component';
import { PrivateAreaComponent } from './private-area/private-area/private-area.component';
import { AuthGuard } from './_guards/auth.guard';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: '',
    //runGuardsAndResolvers: 'always',    
    canActivate: [AuthGuard],
    children: [
      { path: 'search', component: SearchComponent },
      { path: 'register', component: RegisterComponent },

      // privateArea
      { path: 'privateArea/private-area', component: PrivateAreaComponent },
      { path: 'privateArea/cvs', component: CvsComponent },
      { path: 'privateArea/AppliedJobs', component: AppliedJobsComponent },
      { path: 'privateArea/savedJobs', component: SavedJobsComponent },
      { path: 'privateArea/settings', component: SettingsComponent },

      // { path: 'members', component: MemberListComponent },
      // { path: 'member/edit', component: MemberEditComponent, canDeactivate:[PreventUnsaveChangesGuard] },
      // { path: 'members/:username', component: MemberDetailComponent },
      // { path: 'lists', component: ListsComponent },
      // { path: 'messages', component: MessagesComponent },
    ]
  },
  // { path: 'errors', component: TestErrorComponent },
  { path: '**', component: RegisterComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
// import { TestErrorComponent } from './errors/test-error/test-error.component';
// import { HomeComponent } from './home/home.component';
// import { ListsComponent } from './lists/lists.component';
// import { MemberDetailComponent } from './members/member-detail/member-detail.component';
// import { MemberEditComponent } from './members/member-edit/member-edit.component';
// import { MemberListComponent } from './members/member-list/member-list.component';
// import { MessagesComponent } from './messages/messages.component';
// import { AuthGuard } from './_guards/auth.guard';
// import { PreventUnsaveChangesGuard } from './_guards/prevent-unsave-changes.guard';

const routes: Routes = [
  { path: '', component: SearchComponent },
  {
    path: '',
    //runGuardsAndResolvers: 'always',
    //canActivate: [AuthGuard],
    children: [
       { path: 'admin', component: AdminComponent },
      // { path: 'members', component: MemberListComponent },
      // { path: 'member/edit', component: MemberEditComponent, canDeactivate:[PreventUnsaveChangesGuard] },
      // { path: 'members/:username', component: MemberDetailComponent },
      // { path: 'lists', component: ListsComponent },
      // { path: 'messages', component: MessagesComponent },
    ]
  },
  // { path: 'errors', component: TestErrorComponent },
  // { path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
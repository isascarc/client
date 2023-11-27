import { Component, OnInit } from '@angular/core';
import { JobsService } from '../_services/jobs.service';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model: any = {};
  goToAdmin = true;

  constructor(private jobService: JobsService, public accountService: AccountService, public adminService: AdminService,
    private router: Router, private toastr: ToastrService) { }


  ngOnInit(): void {
  }

  login() {
    if (!this.goToAdmin) {
      this.accountService.login(this.model).subscribe({
        next: _ => this.router.navigateByUrl('/search'),
        error: err => this.toastr.error(err.error)
      })
    }
    else {
      this.adminService.login(this.model).subscribe({
        next: _ => {
          this.accountService.setCurrentUser(this.adminService.currentUserSource.getValue()!);
          this.router.navigateByUrl('/admin');
        },
        error: err => this.toastr.error(err.error)
      })
    }
  }



  goToPrivateArea() {
    this.router.navigateByUrl('/privateArea');
  }
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

  deleteUser() {
    this.accountService.deleteUser();
    this.router.navigateByUrl('/');
  }
  register() {
    this.router.navigateByUrl('/register');
  }
}
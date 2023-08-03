import { Component, OnInit } from '@angular/core';
import { JobsService } from '../_services/jobs.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private jobService: JobsService) { }

  ngOnInit(): void {
  }

  
}

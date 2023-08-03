import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../_modules/job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  @Input() jobData! :Job;
  constructor() { }

  ngOnInit(): void {
  }

}

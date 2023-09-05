import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Job } from '../_modules/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  @Input() jobs! : Job[];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  @Input() jobs= [{id:9, text:''}];

  constructor() { }

  ngOnInit(): void {
  }

}

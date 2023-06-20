import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  @Input() jobData= {id:3, text:''};
  constructor() { }

  ngOnInit(): void {
  }

}

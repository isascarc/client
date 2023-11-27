import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Job } from '../_modules/job';
import { Applicant } from '../_models/applicant';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsService {

  baseUrl = 'http://localhost:5001/applicants/';

  constructor(private http: HttpClient, private toaster: ToastrService) { }

  public createApplicant(jobId: number) {
    return this.http.post(`${this.baseUrl}Create/${jobId}`, {});
  }

  public getMyApplicant() {
    return this.http.get<[ Applicant[],Job[]]>(`${this.baseUrl}`);
  }
}
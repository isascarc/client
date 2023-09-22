import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Job } from '../_modules/job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  baseUrl = 'http://localhost:5001/';
  baseJobsUrl = 'http://localhost:5001/Jobs/';

  constructor(private http: HttpClient, private toaster: ToastrService) { }

  public searchJobs(query: any) {
    return this.http.get<Job[]>(`${this.baseJobsUrl}GetJobs?haveToar=${query.haveToar}&salary=${query.salry}&haveEnglish=${query.haveEnglish}`);
  }

  public getMySavedJobs() {
    return this.http.get<Job[]>(`${this.baseUrl}SavedJobs`);
  }
  
  public saveJob(jobNumber: number) {
    return this.http.post<any>(`${this.baseUrl}SavedJobs`,jobNumber);
  }

  public createJob(query: any) {
    return this.http.post<boolean>(`${this.baseJobsUrl}`, query);
  }
}

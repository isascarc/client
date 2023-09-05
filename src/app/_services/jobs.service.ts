import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Job } from '../_modules/job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  baseUrl = 'http://localhost:5001/Jobs/';

  constructor(private http: HttpClient,  private toaster:ToastrService) { }

  public searchJobs(query: any) {
    return this.http.get<Job[]>(`${this.baseUrl}GetJobs?haveToar=${query.haveToar}&salary=${query.salry}&haveEnglish=${query.haveEnglish}`);
  }
  
  public getMySavedJobs() {
    return this.http.get<Job[]>(`${this.baseUrl}get-My-Saved-Jobs`);
  }

  public createJob(query: any) {   
    return this.http.post<boolean>(`${this.baseUrl}`,query);
  } 
}

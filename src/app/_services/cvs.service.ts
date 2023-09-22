import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/_models/user';
import { cvs } from '../_models/cvs';

@Injectable({
  providedIn: 'root'
})

export class CvsService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  setAsDefault(cvNumber: number) {
    return this.http.put(`${this.baseUrl}user/cv/set-as-default/${cvNumber}`, {});
  }


  downloadFile(cvNumber: number): Observable<HttpResponse<Blob>> {
    return this.http.get<Blob>(`${this.baseUrl}user/cv/${cvNumber}`, { observe: 'response', responseType: 'blob' as 'json' });
  }
  
  downloadAllCvs(): Observable<HttpResponse<Blob>> {
    return this.http.get<Blob>(`${this.baseUrl}user/cv/as-zip`, { observe: 'response', responseType: 'blob' as 'json' });
  }
  
  downloadAsExcel(): Observable<HttpResponse<Blob>> {
    return this.http.get<Blob>(`${this.baseUrl}user/cv/GetAllAsExcel`, { observe: 'response', responseType: 'blob' as 'json' });
  }

  delete(cvNumber: number) {
    return this.http.delete(`${this.baseUrl}user/cv/${cvNumber}`, {});
  }
  changeName(cvNumber: number, newName: string) {
    return this.http.put<any>(`${this.baseUrl}user/cv/cv-Change-Name/${cvNumber}`,
      {}, { params: { newName: newName } });
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExtensionsService {
  baseUrl = 'http://localhost:5041/Jobs/';
  baseUrlGetJob = 'http://localhost:5041/weatherforecast/GetJob?';

  constructor(private http: HttpClient) { }

  public searchJobs(query: any) {
    return this.http.get<any>(`${this.baseUrlGetJob}query=${query.toppings}&withoutsalry=${query.withoutSalry}&haveToar=${query.haveToar}
    &salry=${query.salry}`);
  }

  public createJob(query: any) {
    const requestBody = {
      query: 'your query',
      salry: "1000",
      haveEnglish: "true",
      profession: 'your profession',
      toppings: 'your toppings',
      haveToar: "true",
      area: 'your area',
      other: 'your other',
      withoutSalry: 'your withoutSalry'
    };

    console.log(99)
    return this.http.post<boolean>(`${this.baseUrl}create`,requestBody);
  }
}

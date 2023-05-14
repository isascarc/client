import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExtensionsService {
  baseUrl='https://localhost:7023/weatherforecast?' ;

  constructor(private http: HttpClient) {  }
  

  public getExtById(crxId:string){
    return this.http.get<any>(this.baseUrl + 'crxId='+crxId);
  }
}

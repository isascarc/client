import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/_models/user';
import { cvs } from '../_models/cvs';
import { Member } from '../_models/member';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.baseUrl;
  public currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: any) {
    console.log(model);
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          this.setCurrentUser(user);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/register', model).pipe(
      map(user => {
        if (user) {
          this.setCurrentUser(user);
        }
      })
    )
  }

  setCurrentUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  deleteUser() {
    let jwt = localStorage.getItem('user');
    return this.http.delete(`${this.baseUrl}account`).subscribe({
      next: x => console.log(x)
    });
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  getUserData() {
    return this.http.get<Member>(`${this.baseUrl}Account/User-Data`);
  }

  setUserData(member: any) {
    console.log('aaa: ');
    console.log( member);
    return this.http.put(`${this.baseUrl}Account/Update-User`, member);
  }

  loadCvs() {
    return this.http.get<cvs[]>(`${this.baseUrl}user/cv/`);
  }

  sendEmail() {
    return this.http.get<boolean>(`${this.baseUrl}Account/send-email`);
  }
  
  sendJobInEmail(jobNumber:number,emailAddress:string) {
    return this.http.post<boolean>(`${this.baseUrl}share/Send-to-email`,{jobNumber,emailAddress});
  }
}

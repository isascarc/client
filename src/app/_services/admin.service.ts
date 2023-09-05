import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.baseUrl;
  public currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: any) {
    console.log(model);
    return this.http.post<User>(this.baseUrl + 'Recs/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          this.setCurrentAdmin(user);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post<User>(this.baseUrl + 'Recs/register', model).pipe(
      map(user => {
        if (user) {
          this.setCurrentAdmin(user);
        }
      })
    )
  }

  setCurrentAdmin(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }
}

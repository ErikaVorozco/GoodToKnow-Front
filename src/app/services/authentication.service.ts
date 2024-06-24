import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserCredentials } from './types';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://localhost:8080/auth';

  private http = inject(HttpClient);

  constructor() {}

  login(credentials: UserCredentials): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token)
        }
      })
    )
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

}

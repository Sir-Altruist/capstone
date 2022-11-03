import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../Login';
import { Observable } from 'rxjs';

const token = 'b21uaWNvbXBvbmVudC4xLjAuMDpiNHM4cmdUeWc1NVhZTnVu';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Basic ${token}`,
  }),
};
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = 'https://mpsos-auth.omni.manh.com';
  constructor(private http: HttpClient) {}

  loginAuth(details: Login): Observable<Login> {
    return this.http.post<Login>(
      `${this.baseUrl}/oauth/token?grant_type=password`,
      details,
      httpOptions
    );
  }
}

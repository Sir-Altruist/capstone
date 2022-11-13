import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login, Table } from '../Login';
import { Observable } from 'rxjs';

const token = 'b21uaWNvbXBvbmVudC4xLjAuMDpiNHM4cmdUeWc1NVhZTnVu';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${token}`,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = 'https://mpsos-auth.omni.manh.com';

  constructor(private http: HttpClient) {}

  loginAuth(details: string): Observable<Login> {
    return this.http.post<Login>(
      `${this.baseUrl}/oauth/token`,
      details,
      httpOptions
    );
  }
}

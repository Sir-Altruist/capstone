import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Table } from '../Login';
import { Observable } from 'rxjs';

const token = localStorage.getItem('access_token');
const httpOptionsTable = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }),
};
@Injectable({
  providedIn: 'root',
})
export class TableService {
  private baseUrl = 'https://mpsos-auth.omni.manh.com';

  constructor(private http: HttpClient) {}

  tableAuth(details: Table): Observable<Table> {
    return this.http.post<Table>(
      `${this.baseUrl}/audit/api/audit/status/summary`,
      details,
      httpOptionsTable
    );
  }
}

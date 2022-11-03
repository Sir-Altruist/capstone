import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login, Table } from '../Login';
import { Observable } from 'rxjs';
// import * as CryptoJS from 'crypto-js';

const token = 'b21uaWNvbXBvbmVudC4xLjAuMDpiNHM4cmdUeWc1NVhZTnVu';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${token}`,
  }),
};

const httpOptionsTable = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  }),
};
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // set(keys: string, value: string) {
  //   let key = CryptoJS.enc.Utf8.parse(keys);
  //   let iv = CryptoJS.enc.Utf8.parse(keys);
  //   let encrypted = CryptoJS.AES.encrypt(
  //     CryptoJS.enc.Utf8.parse(value.toString()),
  //     key,
  //     {
  //       keySize: 128 / 8,
  //       iv: iv,
  //       mode: CryptoJS.mode.CBC,
  //       padding: CryptoJS.pad.Pkcs7,
  //     }
  //   );
  //   console.log(encrypted.toString());
  //   return encrypted.toString();
  // }

  // let encrypted = this.set('123456$#@$^@1ERF', 'P@ssword1!')
  private baseUrl = 'https://mpsos-auth.omni.manh.com';
  constructor(private http: HttpClient) {}

  // encrypted = this.set('123456$#@$^@1ERF', 'P@ssword1!');

  loginAuth(details: string): Observable<Login> {
    return this.http.post<Login>(
      `${this.baseUrl}/oauth/token`,
      details,
      httpOptions
    );
  }

  tableAuth(details: Table): Observable<Table> {
    return this.http.post<Table>(
      `${this.baseUrl}/audit/api/audit/status/summary`,
      details,
      httpOptionsTable
    );
  }
}

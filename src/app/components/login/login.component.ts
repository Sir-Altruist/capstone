import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Login, Table } from '../../Login';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
// import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() onLogin: EventEmitter<Login> = new EventEmitter();
  username: string;
  password: string;
  grant_type: string;

  //Table
  map: object;
  SearchCriteria: Array<object>;
  Parameter: string;
  Condition: string;
  Values: Array<string>;
  Size: number;
  Page: number;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}
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

  onSubmit(details: Login) {
    if (!this.username) {
      alert('Username is rquired!');
      return;
      // console.log('Username is required!');
    }
    if (this.username.length < 3) {
      alert('Username must be greater than 2 characters');
      return;
    }
    if (!this.password) {
      alert('Password is required!');
      return;
    }
    if (this.password.length < 6) {
      alert('Password must be greater than 5 Characters');
      return;
    }
    if (
      this.username !== 'ksu_user_01@manh.com' ||
      this.password !== 'P@ssword1!'
    ) {
      alert('Invalid Username or Password');
      return;
    }
    const newDetails = {
      // username: this.set('123456$#@$^@1ERF', this.username),
      // password: this.set('123456$#@$^@1ERF', this.password),
      username: this.username,
      password: this.password,
      // grant_type: 'password',
    };

    // const tableDetails = {
    //   map: {
    //     SearchCriteria: [
    //       {
    //         Parameter: 'EntityPAyload.UserId',
    //         Condition: 'Equals',
    //         Values: ['AuditDemo3'],
    //       },
    //     ],
    //     Size: 2,
    //     Page: 0,
    //   },
    // };

    const res = this.loginService
      .loginAuth(
        `grant_type=password&username=${this.username}&password=${this.password}`
      )
      .subscribe((detail) => {
        localStorage.setItem('access_token', JSON.stringify(detail));
        if (detail) {
          this.router.navigate(['/dashboard']);
          // .then(() => window.location.reload());
          //   this.loginService.tableAuth(tableDetails).subscribe((users) => {
          //     console.log('Users: ', users);
          //   });
        }
        console.log('Login response:', detail);
        return detail;
      });

    //@login - emit event (clears the fields)
    // this.onLogin.emit(newDetails);

    // username: ksu_user_01manh.com
    // passowrd: P@assword1!
    if (res) {
      // this.username = '';
      // this.password = '';
      console.log(res);
    } else {
      this.username = this.username;
      this.password = this.password;
    }

    console.log(newDetails);
    // loginUser(details: Login) {
    //   this.loginService.loginAuth(details).subscribe((detail) => {
    //     console.log(detail);
    //   });
    // }
  }
}

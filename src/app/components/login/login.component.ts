import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Login } from '../../Login';
import { LoginService } from '../../services/login.service';

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

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  onSubmit(details: Login) {
    if (!this.username) {
      alert('Username is rquired!');
      // console.log('Username is required!');
    }
    if (!this.password) {
      alert('Password is required!');
    }

    const newDetails = {
      username: this.username,
      password: this.password,
      grant_type: this.password,
    };

    const res = this.loginService.loginAuth(newDetails).subscribe((detail) => {
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

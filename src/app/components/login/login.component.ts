import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Login } from '../../Login';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

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

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(details: Login) {
    if (!this.username) {
      alert('Username is rquired!');
      return;
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
      username: this.username,
      password: this.password,
    };

    const res = this.loginService
      .loginAuth(
        `grant_type=password&username=${this.username}&password=${this.password}`
      )
      .subscribe((detail) => {
        if (detail) {
          localStorage.setItem('access_token', detail.access_token);
          this.router.navigate(['/dashboard']);
        }
        return detail;
      });
    if (res) {
      console.log(res);
    } else {
      this.username = this.username;
      this.password = this.password;
    }

    console.log(newDetails);
  }
}

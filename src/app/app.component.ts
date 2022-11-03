import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Login } from './Login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'capstone';

  // constructor(private loginService: LoginService) {}
  // loginUser(details: Login) {
  //   this.loginService.loginAuth(details).subscribe((detail) => {
  //     console.log(detail);
  //   });
  // }
}

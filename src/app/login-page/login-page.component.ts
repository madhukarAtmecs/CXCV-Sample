import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  email = new FormControl('');
  password = new FormControl('');

  loginSuccess = '';

  loginCred = {
    email_id: 'tabishnadeem@gmail.com',
    pass: '1234',
  };

  constructor(private router:Router) {}

  removeAlert() {
    setTimeout(() => {
      this.loginSuccess = '';
    }, 4000);
  }

  login() {
    if (
      this.email.value === this.loginCred.email_id &&
      this.password.value === this.loginCred.pass
    ) {
      this.email.setValue('');
      this.password.setValue('');
      this.loginSuccess = 'success';
      this.removeAlert();
      this.router.navigate(['/landingpage']);
    } else {
      this.loginSuccess = 'error';
      this.removeAlert();
    }
  }
}

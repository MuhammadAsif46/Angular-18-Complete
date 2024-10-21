import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userObj: any = {
    userName: '',
    password: '',
  };

  router = inject(Router);
  http = inject(HttpClient);

  // Hard-Code login
  // loginHandler() {
  //   if (
  //     this.userObj.userName === 'admin' &&
  //     this.userObj.password === '12345'
  //   ) {
  //     alert('login successful');
  //     localStorage.setItem('userName', this.userObj.userName);
  //     this.router.navigateByUrl("home")
  //   } else {
  //     alert('Please enter correct username and password');
  //   }
  // }
  // Login with Swigger API
  loginHandler() {
    this.http
      .post('https://projectapi.gerasim.in/api/Users/Login', this.userObj)
      .subscribe((res: any) => {
        if (res.result) {
          alert('login successful');
          localStorage.setItem('userData', JSON.stringify(res.data));
          this.router.navigateByUrl('home');
        } else {
          alert(res.message);
        }
      });
  }
}

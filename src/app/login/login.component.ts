import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  submit(f) {
    if (f.value.txt_email_login == 'Shubham' && f.value.txt_password_login == 'Sharma') {
      sessionStorage.setItem(environment.login,'true');
      console.log(sessionStorage.getItem(environment.login));
      this.router.navigate(['/']);
    }
    else {
      window.alert('Invalid Credentials');
    }
  }

}

import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  submit(f) {
    swal({
      title: "Now logging you in..",
      buttons: [""]
    })
    if (f.value.txt_email_login == 'Shubham' && f.value.txt_password_login == 'Sharma') {
      sessionStorage.setItem(environment.login, 'true');
      swal("Welcome to FundsMart", "Logged in successfully", "success");
      this.router.navigate(['/']);
    }
    else {
      swal("Invalid credentials", "", "error");
    }
  }
}


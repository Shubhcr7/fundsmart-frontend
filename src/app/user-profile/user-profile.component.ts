import { Router } from '@angular/router';
import { CheckLoginService } from './../check-login.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user_name="Shubham Sharma";
  proj_number=10;
  constructor(public checkLogin:CheckLoginService,public router:Router) { }

  ngOnInit() {
   if(!this.checkLogin.isValid()){
      this.router.navigate(['\login']);
   }
  }

}

import { Router } from '@angular/router';
import { CheckLoginService } from './../check-login.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user_name = "Shubham Sharma";
  proj_number = 2;
  my_projects = [{
    img: 'assets/images/ex/thumb3.jpg',
    title: 'fdnsdm,fndsmnf,mds',
    bankers: 120,
    pledged: 240,
    days: 10,
    description: 'The new magnetic line up from FableWood. Mix, Match, Combine and Create your own curious creatures. Endless possibilities for all ages.',
    address:'dasdasdasdasdsadasdas'
  }, {
    img: 'assets/images/ex/thumb2.jpg',
    title: 'skglkdfkldfghdfklgdf',
    bankers: 500,
    pledged: 10000,
    days: 25,
    description: 'From the first Zabihah Halal & Glatt Kosher Interfaith Meat to Hummus for All of Us, we use food to build community and combat hate.',
    address:'tnrtibnitniirthrt'
  }]
  constructor(public checkLogin: CheckLoginService, public router: Router) { }

  ngOnInit() {
    if (!this.checkLogin.isValid()) {
      this.router.navigate(['\login']);
    }
  }

  createRequest(form,address){
    let data={
      description:form.value.description,
      value:form.value.value,
      recipient:form.value.recipient,
      addressc:address
    }
    console.log(data);
  }

}

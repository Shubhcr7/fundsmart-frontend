import { CheckLoginService } from './../check-login.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  categories;

  constructor(public http:HttpClient,public router:Router,public CheckLoginService:CheckLoginService) { }

  ngOnInit() {
  if(!this.CheckLoginService.isValid()){
    this.router.navigate(['/login']);
  }
  this.categories=["Art","Comics","Design","Fashion","Film","Games","Music"];
}
  submit(f){
    console.log(f.value);
    this.http.post(environment.url+'createcampaign',f.value).subscribe((res)=>{
      console.log(res);
    })
  }
}

import { element } from 'protractor';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CheckLoginService {

  constructor(http:HttpClient,public router:Router) {
  }
  isValid()
  {
    if(sessionStorage.getItem(environment.login)=='true'){
      return true;
    }
    else if(sessionStorage.getItem(environment.login)=='false'){
      return false;
    }
  }
}

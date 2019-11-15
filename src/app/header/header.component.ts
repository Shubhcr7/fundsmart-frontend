import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  submit(f){
    if(f.value.txt_email_login=='Shubham' && f.value.txt_password_login=='Sharma'){
      console.log('LOGIN');
      this.router.navigate(['project']);
    }
    else{
      console.log('FAILEd');
    }
  }
  myFunc(f){
    console.log(f.value);
    // this.router.navigate(['search-result']);
    this.router.navigate(['/search-result'],{ queryParams: { search_key:f.value.search_key }});
  }
}

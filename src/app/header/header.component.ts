import { environment } from './../../environments/environment';
import { GetAccountsService } from './../get-accounts.service';
import { CheckLoginService } from './../check-login.service';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  displayLog: boolean;
  displaySpinner:boolean;
  constructor(public router: Router, public checkLog: CheckLoginService, public getAccountsService: GetAccountsService) { }

  ngOnInit() {
    this.displaySpinner=false;
    if (this.checkLog.isValid()) {
      this.displayLog = true;
    }
    else {
      this.displayLog = false;
    }
  }

  logOut() {
    if (window.confirm('Are you sure to logout  ?')) {
      sessionStorage.setItem(environment.login, 'false');
      this.displayLog = false;
      this.router.navigate(['/']);
    }
  }
  getAccounts() {
    this.displaySpinner=true;
    this.getAccountsService.setAccounts();
    setTimeout(() => {
      this.displaySpinner=false;
      this.router.navigate(['/category']);
    },
      5000);

  }

  myFunc(f) {
    console.log(f.value);
    // this.router.navigate(['search-result']);
    this.router.navigate(['/search-result'], { queryParams: { search_key: f.value.search_key } });
  }
}

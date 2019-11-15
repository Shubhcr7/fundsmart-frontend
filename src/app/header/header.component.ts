import { CheckLoginService } from './../check-login.service';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  displayLog: boolean
  constructor(public router: Router, public checkLog: CheckLoginService) { }

  ngOnInit() {
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

  myFunc(f) {
    console.log(f.value);
    // this.router.navigate(['search-result']);
    this.router.navigate(['/search-result'], { queryParams: { search_key: f.value.search_key } });
  }
}

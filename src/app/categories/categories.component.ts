import { Router } from '@angular/router';
import { GetAccountsService } from './../get-accounts.service';
import { environment } from './../../environments/environment';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  projects;
  constructor(public getAccountsService: GetAccountsService,public router:Router ) {
  }

  ngOnInit() {
    this.projects = this.getAccountsService.getAccounts();
  }

  getAProject(x) {
    this.router.navigate(['/project'], {queryParams:{address:x}});
  }
}

import { NgxSpinnerService } from 'ngx-spinner';
import { GetAccountsService } from './../get-accounts.service';
import { environment } from './../../environments/environment';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  projects;
  constructor(public getAccountsService: GetAccountsService, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.projects=this.getAccountsService.getAccounts();
  }

  showDetails() {
    // this.projects=this.getAccountsService.getAccounts();
    // for(let i=0;i<this.projects.length;i++){
    //   console.log(this.projects[i]);
  }
}

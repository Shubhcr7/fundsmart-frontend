import { Router, ActivatedRoute } from '@angular/router';
import { GetAccountsService } from './../get-accounts.service';
import { environment } from './../../environments/environment';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  projects;
  selected_category;
  selected_projects;
  categories = ["Popular", "Art", "Comics", "Design", "Fashion", "Film", "Games", "Music"];
  constructor(public getAccountsService: GetAccountsService, public router: Router, public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((param) => {
      this.selected_category = param['selected_category'];
    })
    this.getAccountsService.setAccounts();
    this.projects = this.getAccountsService.getAccounts();
    this.selected_projects = _.filter(this.projects, { proj_type: this.selected_category });
    console.log(this.selected_category);
  }

  getAProject(x) {
    this.router.navigate(['/project'], { queryParams: { address: x } });
  }

  filterCategory(x) {
    this.selected_category = x;
    this.selected_projects = _.filter(this.projects, { proj_type: x });
  }
}

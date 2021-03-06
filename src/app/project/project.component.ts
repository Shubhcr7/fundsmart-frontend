import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  search_key;
  min_fund;
  constructor(public http: HttpClient, public activatedRoute: ActivatedRoute,public router:Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((param) => {
      this.search_key = param['address'];
    });
    this.http.get(environment.url+'getd/'+this.search_key).subscribe(response=>{
      this.min_fund=response;
    });
  }
  navigateToRequests(){
    this.router.navigate(['/approvefinalize'], {queryParams:{address:this.search_key}});
  }
}


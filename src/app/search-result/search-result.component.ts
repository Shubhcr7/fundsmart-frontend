import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  search_key:String;
  constructor(public activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((param)=>{
      this.search_key=param['search_key'];
    })
  }

}

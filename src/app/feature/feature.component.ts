import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import * as _ from 'lodash';
@Component({
  selector: 'feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  categories=["Art","Comics","Design","Fashion","Film","Games","Music"]; 
  constructor(@Inject(DOCUMENT) document,public router:Router) {

   }

  ngOnInit() {
  
  }

  routeToCategory(x:string){
    let category:String =document.getElementById('cate'+x).innerText;
    let index=category.indexOf('(');
    category=category.substring(0,index-1);
    // document.getElementById('cate').innerText=document.getElementById('cate'+x).innerText;
    this.router.navigate(['/category'],{ queryParams: { selected_category: category } });
  }

}

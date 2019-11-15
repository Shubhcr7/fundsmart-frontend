import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
@Component({
  selector: 'feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  categories=["Art","Comics","Design","Fashion","Film","Games","Music"]; 
  constructor(@Inject(DOCUMENT) document) {

   }

  ngOnInit() {
  
  }

  myFunc(x:string){
    console.log(document.getElementById('cate'+x).innerText);
    document.getElementById('cate').innerText=document.getElementById('cate'+x).innerText;
  }

}

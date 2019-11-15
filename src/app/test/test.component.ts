import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name1;
  constructor(public http:HttpClient){
    
  }
  ngOnInit(){
    this.http.get('http://localhost:3000/getData').subscribe((res)=>{
      // this.name1=res.name;
    })
  }
  myFunc(f){
    console.log(f.value);
    this.http.post('http://localhost:3000/change',f.value).subscribe((res)=>{
      console.log(res);
    })
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  categories;

  constructor() { }

  ngOnInit() {
  this.categories=["Art","Comics","Design","Fashion","Film","Games","Music"];
}
  submit(f){
    console.log(f.value);
  }
}

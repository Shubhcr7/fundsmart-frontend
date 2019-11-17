import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
@Component({
  selector: 'approvefinalize',
  templateUrl: './approvefinalize.component.html',
  styleUrls: ['./approvefinalize.component.css']
})
export class ApprovefinalizeComponent implements OnInit {
  data;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(response => {
      this.data = response;
    })
  }
  approve() {
  }
  finalize() {

  }

}

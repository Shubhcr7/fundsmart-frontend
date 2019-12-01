import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit() {
  }
  submit(f) {
    console.log(f.value);

    swal({
      title: "Are you sure to register ?",
      text: "Please ensure to enter valid account details",
      icon: "warning",
      dangerMode: true,
      buttons: true
    })
      .then(willPublish => {
        if (willPublish) {
          swal({
            title: 'Now registering...',
            buttons: false
          });
          this.http.post(environment.url + 'createcampaign', f.value).subscribe(res => {
            swal("Registered", "You have been successfully registered", "Success");
          })

        }
      });


  }
}

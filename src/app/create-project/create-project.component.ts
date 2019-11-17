import { CheckLoginService } from './../check-login.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import swal from 'sweetalert';

@Component({
  selector: 'create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  categories;

  constructor(public http: HttpClient, public router: Router, public CheckLoginService: CheckLoginService) { }

  ngOnInit() {
    if (!this.CheckLoginService.isValid()) {
      this.router.navigate(['/login']);
    }
    this.categories = ["Art", "Comics", "Design", "Fashion", "Film", "Games", "Music"];
  }
  submit(f) {
    console.log(f.value);

    swal({
      title: "Are you sure?",
      text: "This will publish your idea to our servers?",
      icon: "warning",
      dangerMode: true,
      buttons: true
    })
      .then(willPublish => {
        if (willPublish) {
          swal({
            title: 'Now posting...',
            buttons: false
          });
          this.http.post(environment.url + 'createcampaign', f.value).subscribe(res => {
            swal("Published", "We have published your project", "Success");
            console.log(res);
          })

        }
      });


  }
}

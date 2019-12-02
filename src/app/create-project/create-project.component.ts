import { environment } from './../../environments/environment';
import { CheckLoginService } from './../check-login.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from "rxjs";
import { Element } from '@angular/compiler';

@Component({
  selector: 'create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  categories;
  selectedFile1 = null;
  selectedFile2 = null;

  @ViewChild('fileInput1', { static: false }) fileInput1: ElementRef;
  @ViewChild('fileInput2', { static: false }) fileInput2: ElementRef;

  constructor(public http: HttpClient, public router: Router, public CheckLoginService: CheckLoginService) { }

  ngOnInit() {
    if (!this.CheckLoginService.isValid()) {
      this.router.navigate(['/login']);
    }
    this.categories = ["Art", "Comics", "Design", "Fashion", "Film", "Games", "Music"];
  }
  submit(f) {
    const imageBlob1 = this.fileInput1.nativeElement.files[0];
    const fd = new FormData();
    fd.set('image', imageBlob1);
    var details = JSON.stringify(f.value);
    fd.append('details', details);
    fd.append('name', f.value.name);

    swal({
      title: "Are you sure?",
      text: "This will publish your idea to our servers?",
      icon: "warning",
      dangerMode: true,
      buttons: ["Cancel", "Publish"]
    })
      .then(willPublish => {
        if (willPublish) {
          swal({
            title: 'Now posting...',
            buttons: [""]
          });
          this.http.post(environment.url + 'createcampaign', fd).subscribe(res => {
            swal("Published", "We have published your project", "success");
            console.log(res);
          })
        }
      });
  }
}

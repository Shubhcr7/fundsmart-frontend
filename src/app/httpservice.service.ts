import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  public response;
  constructor(public https:HttpClient) { }

  getService(url){
    url=environment.url+url;
    this.https.get(url).subscribe((res)=>{
    return res;
    })
  }
  postServive(url,data){
    url=environment.url+url;
    this.https.post(url,data).subscribe((res)=>{
      return res;
    })
  }
}

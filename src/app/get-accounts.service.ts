import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAccountsService {
  accounts;
  constructor(public http:HttpClient) {

   }
   setAccounts(){
    this.http.get(environment.url+'getall').subscribe((res)=>{
      this.accounts=res;
    });
   }
   getAccounts(){
     return this.accounts;
   }
}

import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class GetAccountsService {
  accounts;
  constructor(public http: HttpClient) {

  }
  setAccounts() {
    // this.http.get(environment.url+'getall').subscribe((res)=>{
    //   this.accounts=res;
    // });
    this.accounts = [{ "name": "Shubham Sharma", "idea": "Best idea everrrrrrrrrrrrr", "balance": "0", "goal": "100000", "manager": "0xb9bEb78AFD25A0a26E1fc6501e23E70F1B010259", "proj_type": "Design", "address": "0x3c226c5F46d75b283405c41CCb9Ec12dDae17Fa9" }, { "name": "Kunal Mittal", "idea": "Worst idea everrrrrrrr", "balance": "0", "goal": "450000", "manager": "0xb9bEb78AFD25A0a26E1fc6501e23E70F1B010259", "proj_type": "Comics", "address": "0x130bE3b1eFB5d1d7aa57D62201C06b291f48F1fC" }, { "name": "Saransh Jain", "idea": "Still thinking about it", "balance": "0", "goal": "250000", "manager": "0xb9bEb78AFD25A0a26E1fc6501e23E70F1B010259", "proj_type": "Comics", "address": "0x05B3F9A89fE79b52d903FC16FbC5cbC8b9268bE8" }, { "name": "Saransh Jain", "idea": "Still thinking about it", "balance": "0", "goal": "250000", "manager": "0xb9bEb78AFD25A0a26E1fc6501e23E70F1B010259", "proj_type": "Comics", "address": "0x743EFf811E2D53ad70F633Ffb85bDaBDe02b7df3" }, { "name": "dsflsdfklsdfnksdnfklsnlk", "idea": "nklndklsfnsdklfnkldsnflksdnfklsdkflsdklfsdkl", "balance": "0", "goal": "710000", "manager": "0xb9bEb78AFD25A0a26E1fc6501e23E70F1B010259", "proj_type": "Comics", "address": "0x9e92F0CFB78a94A70e7a66E72B189B1095172b10" }, { "name": "adasdaknlsdkasdklnaklsdnklasndlkaskldasnkdslakndlksankl", "idea": "nklrnklernklwernlkewrnlkwernklnwklrklernlkwne", "balance": "0", "goal": "4500000", "manager": "0xb9bEb78AFD25A0a26E1fc6501e23E70F1B010259", "proj_type": "Comics", "address": "0x942cb0FeDbeccd6f6f218fD1a6eA5Fee094bC458" }, { "name": "Isha Mittal", "idea": "vdbv", "balance": "4200002000020000200", "goal": "2000", "manager": "0xb9bEb78AFD25A0a26E1fc6501e23E70F1B010259", "proj_type": "Art", "address": "0x2f94b55625B156f527E5bC2e22089c471aC1BF26" }, { "name": "Babu Mittal", "idea": "vdbv", "balance": "0", "goal": "2000", "manager": "0xb9bEb78AFD25A0a26E1fc6501e23E70F1B010259", "proj_type": "Art", "address": "0xe322493584bEFf0C77740ae5682ea7C10184b9B2" }, { "name": "Babuu", "idea": "vdbv", "balance": "0", "goal": "2000", "manager": "0xb9bEb78AFD25A0a26E1fc6501e23E70F1B010259", "proj_type": "Art", "address": "0x8bd9fab1ca34417403F65a1e8a69a75ba147F569" }];
    console.log(_.filter(this.accounts,{name: 'Saransh Jain'}));
  }
  getAccounts() {
    return this.accounts;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LantronixService {
 private  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded',
     'Accept': '*/*'  })
  };
  constructor(private htttp: HttpClient) { }
  public getLogin(username:string,password:any){
   const logindetails = 'email='+username+'&'+'password='+password;
   const url = 'https://ltrx.herokuapp.com/POST/api/v1/auth/loginHTTP/1.1';
   return this.htttp.post(url, logindetails, this.httpOptions).toPromise().then((data)=>{
      console.log();
   });
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class RegisterServiceService {

  private registerUrl : string;
  constructor(
    private http: HttpClient
  ) {
    this.registerUrl ="http://localhost:8082/user/register";
  }

  register(user: any): Observable<any>{
    return this.http.post<any>(this.registerUrl, user);
  }
}

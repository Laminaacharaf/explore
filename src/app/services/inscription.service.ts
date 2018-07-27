import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { API } from '../constantes/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';




const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class InscriptionService {

  constructor(private api:API, private http:HttpClient) { }

  create_user(data:any):Observable<any>{
    return this.http.post(this.api.BaseUrl + this.api.userCreate  ,data, httpOptions);
  }

  list_user():Observable<any>{
    return this.http.get(this.api.BaseUrl + this.api.listUserUrl)
  }


}

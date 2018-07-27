import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { API } from "../constantes/api";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin':'*',
    
  })
};


@Injectable()
export class PostulantsService {

  constructor(private http:HttpClient, private apiUrls:API) { }


  getListPostulant(){
    return this.http.get(this.apiUrls.BaseUrl + this.apiUrls.listPostulantUrl);
  }


  lire_post(id){

    return this.http.get(this.apiUrls.BaseUrl + this.apiUrls.listPostulantUrl+ '/' + id, httpOptions);
  }


  supp_post(id){
    return this.http.delete(this.apiUrls.BaseUrl + this.apiUrls.supp_postUrl + '/' + id,httpOptions)
  }

}
